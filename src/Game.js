import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      snake: [],
      direction: null,
      gameOver: false,
    };
  }
  render() {
    return <div>Game</div>;
  }
}

export default Game;
