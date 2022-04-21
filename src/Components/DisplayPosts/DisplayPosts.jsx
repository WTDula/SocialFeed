import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.pagePosts.map((post) => {
                return (
                    <Post userName={post.userName} postBody={post.postBody}/>
                )
            })}
        </div>
        );
}

    export default DisplayPosts;