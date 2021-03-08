import React, {useState} from 'react';
import Messages from './Messages';
import Post from './FacebookPost';

function App() {
  // CLASS COMPONENT
  // state = {
  //  count: 0
  // }
  // increment = () => {
  //   this.setState({
  //     number: this.state.number +1
  //   })
  // }

  // FUNCTION COMPONENT

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="Container">
      <h3>counter: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
