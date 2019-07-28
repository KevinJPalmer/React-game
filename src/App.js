import React, { Component } from "react";
import MemCard from "./components/MemCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    score: 0,
    highScore: 0,
    alreadyClicked: [],
  };

  resetGame() {
    this.setState({
      alreadyClicked: [],
      score: 0,
    })
  }

  shuffleCards() {
    const shuffled = [...this.state.cards];
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
    }
    return shuffled;
  }

  checkHighScore() {
    const { score, highScore, cards } = this.state;
    if (score > highScore) {
      this.setState({ highScore: score }, () => {
        if (score === cards.length) {
          alert("You won!");
          this.resetGame();
        }
      });
    }
  }

  handleClick = (id) => {
    const { alreadyClicked } = this.state;
    if (alreadyClicked.includes(id)) {
      alert("You Lost");
      this.resetGame();
    } else {
      this.setState({
        alreadyClicked: [...alreadyClicked, id],
        cards: this.shuffleCards(),
        score: this.state.score + 1,
      }, () => {
        this.checkHighScore();
      });
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const { score, highScore, cards } = this.state;
    return (
      <Wrapper>
        <NavBar
          score={ score }
          highScore={ highScore }
        />
        {cards.map(card => (
          <MemCard
            id={card.id}
            key={card.id}
            image={card.image}
            clickHandler={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
