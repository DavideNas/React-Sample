import React, { useState } from 'react';
import Post from './FacebookPost';

function App() {
  const [posts, setPosts] = useState([
      {author: 'Mr. Henky', description: 'è una cacca ?'},
      {author: 'Dr. Henky', description: 'è una merdina...'},
      {author: 'Mrs. Henky', description: 'è una vera merda !'},
      {author: 'Henky Kid', description: 'io caco fiori di montagna'},
  ]);

  return (
    <div className="Container">
      {posts.map((post, index) => (
        //console.log(post);
        <Post key={index} author={post.author} description={post.description} />
      ))}
    </div>
  );
}

export default App;
