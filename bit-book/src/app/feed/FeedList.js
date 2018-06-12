import React from 'react';
import FeedListItem from './FeedListItem';
import { Link } from 'react-router-dom';


const FeedList = (props) => {

    return (
        <div className='col-6 offset-3'>
            {props.posts.map(post => {
                return <Link to={"/feed/" + post.id}><FeedListItem type={post.type} numOfComments={post.commentsNum} value={post.value} /></Link>
            })}
        </div>
    )
}

export default FeedList;