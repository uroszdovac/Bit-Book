import React from 'react';

const NewPostButton = () => {

    return (

        <div>
            <div class="container">
                <div id='floating-buttons'>
                    <div class="buttons" tooltip="New Post"></div>

                    <div class="buttons" tooltip="New Video"></div>

                    <div class="buttons" tooltip="New Image"></div>

                    <div class="buttons"></div>
                </div>
            </div>
        </div>

    )
}

export default NewPostButton;