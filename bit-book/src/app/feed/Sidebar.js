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
                    <a className="dropdown-item" href="#">Videos</a>
                    <a className="dropdown-item" href="#">Images</a>
                    <a className="dropdown-item" href="#">Text</a>
                </div>
            </div>

        </div>
    )
}

export default SideBar;