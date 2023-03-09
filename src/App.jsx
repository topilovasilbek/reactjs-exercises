import React, { Component } from "react";
import Root1 from "./01-03/1/root";
import Root2 from "./01-03/2/root";
import { GlobalStyle } from "./App";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <h1>Solution - 1</h1>
        <Root1 />
        <hr />
        <h1>Solution - 2</h1>
        <Root2 />
      </>
    );
  }
}

export default App;
