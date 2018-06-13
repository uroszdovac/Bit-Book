import React from 'react';

const NewPostButton = (props) => {

    return (

        <div>
            <div className="container">
                <div id='floating-buttons'>
                    <div className="buttons" tooltip="New Post" onClick={props.open} onClick={props.text}></div>

                    <div className="buttons" tooltip="New Video" onClick={props.video}></div>

                    <div className="buttons" tooltip="New Image" onClick={props.open} onClick={props.image}></div>

                    <div className="buttons"></div>
                </div>
            </div>
        </div>

    )
}

export default NewPostButton;