import React from 'react';

const TextPost = (props) => {

    return (
        <div className='textItem'>
            <p>{props.value}</p>
        </div>
    )
}

export default TextPost;