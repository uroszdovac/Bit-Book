import React from 'react';
import Video from './VideoPost';
import Image from './ImagePost';
import TextPost from './TextPost';

const FeedListItem = (props) => {

    return (
        <div>
            {props.posts.map(post => {
                if (post.type == 'text') {
                    return <TextPost value={post.value} />
                } else if (post.type == 'image') {
                    return <Image value={post.value} />
                } else {
                    return <Video value={post.value} />
                }
            })}

            <span className='col-3'>{props.type} post</span>
            <span className='col-3 offset-6'>{props.numOfComments} Comments</span>
        </div>
    )

}

export default FeedListItem;