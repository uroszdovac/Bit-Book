import React from 'react';
import Video from './VideoPost';
import Image from './ImagePost';
import TextPost from './TextPost';

const FeedListItem = (props) => {

    return (
        <div className='item'>
            {props.type === "text" ? <TextPost value={props.value} /> : (props.type === "image" ? <Image value={props.value} /> : <Video value={props.value} />)}

            <div className='item-comments'>
                <span className='col-3 item-comments'>{props.type} post</span>
                <span className='col-3 offset-6 item-comments'>{props.numOfComments} Comments</span>
            </div>
        </div>
    )

}

export default FeedListItem;