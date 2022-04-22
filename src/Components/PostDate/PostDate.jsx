import React from 'react';
import "./PostDate.css"


const PostDate = (props) => {

    return (
        <div>
            <h5 className='date-class'>Created on {props.date}</h5>
        </div>
     );
}
 
export default PostDate;