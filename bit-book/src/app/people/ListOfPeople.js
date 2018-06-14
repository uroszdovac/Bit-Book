import React from 'react';
import ListItem from './ListItem';
import UserNotFound from './UserNotFound';



const ListOfPeople = (props) => {

    const filterUserList = (element) => {
        if (!props.search) {
            return true;
        }
        return (element.name.toLowerCase()).includes(props.search.toLowerCase())
    }

    return (
        <div>

            {(props.users.filter(filterUserList).length === 0) ? <UserNotFound /> : ''}

            {props.users.filter(filterUserList).map(user => {
                return <ListItem id={user.id} avatar={user.avatarUrl} name={user.name} about={user.aboutShort} lastPost={user.lastPostDate} />

            })}

        </div>
    )
}

export default ListOfPeople;