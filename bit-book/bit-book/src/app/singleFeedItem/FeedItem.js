import React from 'react';
import Video from '../feed/VideoPost';
import TextPost from '../feed/TextPost';
import Image from '../feed/ImagePost';

const FeedItem = (props) => {

    return (
        <div className='item'>
            {props.post.type === "text" ? <TextPost value={props.post.value} /> : (props.post.type === "image" ? <Image value={props.post.value} /> : <Video value={props.post.value} />)}
        </div>
    )
}

export default FeedItem;