import React from 'react';
import FeedListItem from './FeedListItem';

const FeedList = (props) => {

    return (
        <div className='col-6 offset-3'>
            {props.posts.map(post => {
                return <FeedListItem posts={props.posts} type={post.type} numOfComments={post.commentsNum} />
            })}

        </div>
    )

}

export default FeedList;