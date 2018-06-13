import React from 'react';

const CommentInput = () => {

    return (
        <div className="row">
            <div className="col-10">
                <input id="input" type="text" placeholder="Add your comment" />
            </div>
            <div className="col-2 send">
                <input id="button" type="button" value="Send" />
            </div>
        </div>
    )
}

export default CommentInput;