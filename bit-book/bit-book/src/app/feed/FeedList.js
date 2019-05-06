import React from 'react';
import FeedListItem from './FeedListItem';


const FeedList = (props) => {


    return (
        <div className='col-6 offset-3'>
            {props.posts.filter(post => {
                return props.filterFeed.includes(post.type);
            }).map(post => {
                return < FeedListItem key={post.id} userId={post.userId} deletePost={props.deletePost} type={post.type} numOfComments={post.commentsNum} value={post.value} userName={post.userName} id={post.id} />

            })}
        </div>
    )
}

export default FeedList;