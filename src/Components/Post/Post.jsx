import React from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';
import PostDate from '../PostDate/PostDate';

const Post = (props) => {

    const now = Date()

    return ( 
        <div>
            <hr/>
            <strong>{props.userName}</strong>
            <p>{props.postBody}</p>
            <LikeDislike />
            <PostDate date={now}/>
        </div>
     );
}
 
export default Post;