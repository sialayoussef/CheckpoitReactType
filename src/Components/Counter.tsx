import React, { Component } from 'react';

interface CounterState {
  count: number;
}


class Counter extends Component<{name : string}, CounterState> {
    
  state: CounterState = {
    count: 0
  };


  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>Hello achref{this.props.name}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;