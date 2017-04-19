import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props); // this is required
    this.state = {}; // initial state
  }

  render() {
    return <h1>
      Hello, world!
    </h1>;
  }
}

// let our other modules use this
export default HelloWorld;
