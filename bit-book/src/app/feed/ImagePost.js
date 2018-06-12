import React from 'react';

const Image = (props) => {

    return (
        <div>
            <img src={props.value} alt='image'></img>
        </div>
    )
}

export default Image;