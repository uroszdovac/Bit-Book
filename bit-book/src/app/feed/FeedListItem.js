import React from 'react';
import Video from './VideoPost';
import Image from './ImagePost';
import TextPost from './TextPost';
import { Link } from 'react-router-dom';


const FeedListItem = (props) => {

    return (
        <div className='item'>
            {props.type === "text" ? <TextPost value={props.value} /> : (props.type === "image" ? <Image value={props.value} /> : <Video value={props.value} />)}

            <div className='item-comments'>
                <span className='col-3 item-comments'>{props.type} post</span>
                <Link to={"/feed/" + props.type + "/" + props.id}><span className='col-3 offset-6 item-comments'>{props.numOfComments} Comments</span></Link>
            </div>
        </div>
    )

}

export default FeedListItem;