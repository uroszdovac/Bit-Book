import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {

    const newDate = (date) => {
        let datum = new Date(date)
        let dan = datum.getDate()
        let mesec = datum.getMonth() + 1
        let godina = datum.getFullYear()
        let sati = datum.getHours()
        let minuti = datum.getMinutes()
        return `${dan}.${mesec}.${godina} ${sati}:${minuti}`
    }


    return (
        <div className='row item itemPeoplePage'>
            <div className='col-2'>
                <img src={props.avatar} alt='avatar' />
            </div>
            <div className='col-8'>
                <Link to={'people/' + props.id}><h4>{props.name}</h4></Link>
                <p>{props.about}</p>
            </div>
            <div className='col-2'>
                {
                    (new Date(props.lastPost).toString() === new Date().toString() ?
                        <div>
                            Last post at {new Date(props.lastPost).toString().split(' ')[4].slice(0, 5)}
                        </div>
                        :
                        <div>
                            {newDate(props.lastPost)}
                        </div>)
                }

            </div>
        </div>
    )
}

export default ListItem;