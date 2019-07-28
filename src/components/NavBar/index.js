import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function NavBar(props) {
  const { score, highScore } = props;
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="my-nav"
    >
      <Navbar.Text className="nav-item">
        <span className="font-weight-bold">Score: { score }</span>
      </Navbar.Text>
      <Navbar.Text className="nav-item" >
        <span className="font-weight-bold">{'Clicky Game'}</span>
      </Navbar.Text>
      <Navbar.Text className="nav-item">
        <span className="font-weight-bold">High Score: { highScore }</span>
      </Navbar.Text>
    </Navbar>
  );
}

export default NavBar;
