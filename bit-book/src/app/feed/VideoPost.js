import React from 'react';

const Video = (props) => {

    return (
        <div>
            <iframe width="420" height="345" src={props.value} frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video;