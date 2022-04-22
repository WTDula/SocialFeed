import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import './App.css';

function App() {

  const now = Date()
  const [posts, setPosts] = useState([{userName: "Travis Dula", postBody: "I am about to work the next seven days in a row and am not looking forward to it.", timestamp: now}])

  function addNewPost(post){
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }

  return (
    <div className="App">
      <CreatePost addNewPost={addNewPost}/>
      <DisplayPosts pagePosts={posts}/>
    </div>
  );
}

export default App;
