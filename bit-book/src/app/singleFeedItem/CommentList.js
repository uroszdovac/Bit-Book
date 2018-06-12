import React from 'react';
import CommentListItem from './CommentListItem';

const CommentList = (props) => {

    return (

        <div>
            {props.comments.map(comment =>
                <CommentListItem text={comment.body} authorId={comment.authorId} />
            )}
        </div>
    )

}

export default CommentList;