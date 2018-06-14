import React from 'react';

const Profile = (props) => {

    return (
        <div className="col-4 itemName">
            <h5>{props.name}</h5>
        </div>
    )
}

export default Profile;