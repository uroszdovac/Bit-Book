import React from 'react';

const DeletePost = (props) => {

    const handler = () => {
        props.deletePost(props.id)
    }

    return (

        <div className='col-1' >
            <button className="btn" type="button" id="dropdownMenu2" data-toggle="dropdown" >
                <i className="fa fa-angle-down"></i>
            </button>
            <div className="dropdown-menu" id="deletePost" >
                <input type='button' className="dropdown-item" value='Delete post' onClick={handler} />
            </div>
        </div>

    )

}

export default DeletePost;