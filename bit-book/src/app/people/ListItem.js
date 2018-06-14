import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {


    return (
        <div className='row item itemPeoplePage'>
            <div className='col-2'>
                <img src={props.avatar} alt='image' />
            </div>
            <div className='col-8'>
                <Link to={'profile/' + props.id}><h4>{props.name}</h4></Link>
                <p>{props.about}</p>
            </div>
            <div className='col-2'>
                {props.lastPost}
            </div>
        </div>
    )
}

export default ListItem;