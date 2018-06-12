import React from 'react';
import Video from './VideoPost';
import Image from './ImagePost';
import TextPost from './TextPost';

const FeedListItem = (props) => {

    return (
        <div>
            {props.type === "text" ? <TextPost value={props.value} /> : (props.type === "image" ? <Image value={props.value} /> : <Video value={props.value} />)}

            <span className='col-3'>{props.type} post</span>
            <span className='col-3 offset-6'>{props.numOfComments} Comments</span>
        </div>
    )

}

export default FeedListItem;