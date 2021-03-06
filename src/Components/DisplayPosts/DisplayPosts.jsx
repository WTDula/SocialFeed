import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.pagePosts.map((post, index) => {
                return (
                    <Post key={index} userName={post.userName} postBody={post.postBody} timestamp={post.timestamp}/>
                )
            })}
        </div>
        );
}

    export default DisplayPosts;