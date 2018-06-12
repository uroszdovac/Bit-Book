import React from 'react';

const Video = (props) => {

    return (
        <div>
            <iframe width="420" height="345" src={props.value}>
            </iframe>
        </div>
    )
}

export default Video;