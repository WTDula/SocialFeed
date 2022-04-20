import React, { useState } from 'react';

const Post = (props) => {



    return ( 
        <div>
            <strong>{props.userName}</strong>
            <p>{props.postBody}</p>
            <button>Like</button>
            <button>Dislike</button>
        </div>
     );
}
 
export default Post;