import React from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';

const Post = (props) => {



    return ( 
        <div>
            <strong>{props.userName}</strong>
            <p>{props.postBody}</p>
            <LikeDislike />
        </div>
     );
}
 
export default Post;