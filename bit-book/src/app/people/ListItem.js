import React from 'react';


const ListItem = (props) => {


    return (
        <div className='row item itemPeoplePage'>
            <div className='col-2'>
                <img src={props.avatar} alt='image' />
            </div>
            <div className='col-8'>
                <h4>{props.name}</h4>
                <p>{props.about}</p>
            </div>
            <div className='col-2'>
                {props.lastPost}
            </div>
        </div>
    )
}

export default ListItem;