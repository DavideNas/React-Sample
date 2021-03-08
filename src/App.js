import React from 'react';
import Messages from './Messages';
import Post from './FacebookPost';

class App extends React.Component {
  state = {
    number: 0,
  }

  increment = () => {
    this.setState({
      number: this.state.number +1
    })
  }
  render() {
    return (
      <div className="Container">
        <h3>counter: {this.state.number}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;
