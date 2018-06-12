import React from 'react';

const SideBar = (props) => {

    return (
        <div>
            <p><strong>Show on feed</strong></p>

            <div class="dropdown bg-primary">
                <div class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    All posts
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Videos</a>
                    <a class="dropdown-item" href="#">Images</a>
                    <a class="dropdown-item" href="#">Text</a>
                </div>
            </div>

        </div>
    )
}

export default SideBar;