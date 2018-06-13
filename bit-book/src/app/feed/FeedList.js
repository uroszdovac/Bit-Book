import React from 'react';
import FeedListItem from './FeedListItem';


const FeedList = (props) => {

    return (
        <div className='col-6 offset-3'>
            {props.posts.map(post => {
                return <FeedListItem type={post.type} numOfComments={post.commentsNum} value={post.value} id={post.id} />
            })}
        </div>
    )
}

export default FeedList;