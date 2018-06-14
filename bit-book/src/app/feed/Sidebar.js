import React from 'react';

const SideBar = (props) => {

    return (
        <div className='col-3 side-bar' id="dropdownMenuButton">
            <p><strong>Show on feed</strong></p>

            <div className="dropdown">
                <div className="btn btn-secondary dropdown-toggle bg-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    All posts
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown-item" onClick={() => props.type('video image text')}>All Posts</div>
                    <div className="dropdown-item" onClick={() => props.type('video')}>Videos</div>
                    <div className="dropdown-item" onClick={() => props.type('image')}>Images</div>
                    <div className="dropdown-item" onClick={() => props.type('text')}>Text</div>
                </div>
            </div>

        </div>
    )
}

export default SideBar;