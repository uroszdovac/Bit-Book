import React from 'react';
import Video from './VideoPost';
import Image from './ImagePost';
import TextPost from './TextPost';
import { Link } from 'react-router-dom';
import DeletePost from './DeletePost';
import Profile from './FeedItemProfile';


const FeedListItem = (props) => {


    return (
        <div className='item'>

            {props.type === "text" ?
                <div>
                    <div className='row itemProfileRow'>
                        <Profile className='col-11' userId={props.userId} name={props.userName} image={props.image} /> <DeletePost className='col-1' deletePost={props.deletePost} id={props.id} />
                    </div>
                    <TextPost value={props.value} />
                </div>

                : props.type === "image" ?
                    <div>
                        <div className='row itemProfileRow'>
                            <Profile className='col-11' userId={props.userId} name={props.userName} /><DeletePost deletePost={props.deletePost} id={props.id} />
                        </div>
                        <Image value={props.value} />
                    </div>
                    :
                    <div>
                        <div className='row itemProfileRow'>
                            <Profile className='col-11' userId={props.userId} name={props.userName} /><DeletePost deletePost={props.deletePost} id={props.id} />
                        </div>
                        <Video value={props.value} />
                    </div>}

            <div className='item-comments'>
                <span className='col-3 item-comments'>{props.type} post</span>
                <Link to={"/feed/" + props.type + "/" + props.id}><span className='col-3 offset-6 item-comments commentItem'>{props.numOfComments} Comments</span></Link>
            </div>
        </div>
    )

}

export default FeedListItem;