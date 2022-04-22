import React, { useState } from 'react';
import "./CreatePost.css"

const CreatePost = (props) => {

    const [userName, setUserName] = useState("")
    const [postBody, setPostBody] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        let newPost = {
            userName: userName,
            postBody: postBody
        }
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label for="user-name" className='form-label'>Name</label>
                <input type="text" id='user-name' className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)}/>
                <label for="post-body" className='form-label'>Post</label>
                <textarea id='post-body' className='form-control' value={postBody} onChange={(event) => setPostBody(event.target.value)}>placeholder</textarea>
                <button className='btn btn-info' type='submit'>Create</button>
            </div>
        </form>
     );
}
 
export default CreatePost;