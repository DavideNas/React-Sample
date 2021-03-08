import React from 'react';
import Messages from './Messages';
import Post from './FacebookPost';

function App() {
  console.log('hello from App.js')
  return (
    <div>
      <h2>Ciao Androide</h2>
      <button onClick={() => console.log('hello')}>Click me</button>
      <Messages />
      <Post author="Mr. Henky" description="è una cacca ?" />
      <Post author="Dr. Henky" description="è una merdina..." />
      <Post author="Mrs. Henky" description="è una vera merda !"/>
      <Post author="Henky Kid" description="io la faccio profumata"/>
    </div>
  )
}

export default App;
