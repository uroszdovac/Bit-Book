import React from 'react';
import FeedListItem from './FeedListItem';


const FeedList = (props) => {

    return (
        <div className='col-6 offset-3'>
            {props.posts.filter(post => {
                return props.filterFeed.includes(post.type);
            }).map(post => {
                return < FeedListItem type={post.type} numOfComments={post.commentsNum} value={post.value} id={post.id} />

            })}
        </div>
    )
}

export default FeedList;