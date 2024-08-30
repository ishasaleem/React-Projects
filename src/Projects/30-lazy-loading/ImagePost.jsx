import React, { useEffect, useState } from 'react';
import LazyLoadPost from './LazyLoadPost';

function ImagePost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []); 
  return (
    <div className='container'>
      <h1 className='text-center'>Post images</h1>
      <div className='container d-flex flex-column' style={{ gap: 30 }}>
        {posts.map((post) => (
          <LazyLoadPost key={post.id} title={post.title} img={post.url} />
        ))}
      </div>
    </div>
  );
}

export default ImagePost;
