import React from 'react';

const UserNotFound = () => {

    return (
        <div id="userNotFound" className="col-8 offset-2">
            <i class="fa fa-frown"></i>
            <p>
                We couldn't find any people matching your search
            </p>
        </div>
    )
}

export default UserNotFound;