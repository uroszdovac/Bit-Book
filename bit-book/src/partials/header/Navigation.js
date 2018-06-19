import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const logoutHandler = () => {
        localStorage.removeItem('user')
    }

    return (
        <nav className='row col-6 offset-3'>
            <div className='col-2 offset-1' ><Link to='/feed'>Feed</Link></div>
            <div className='col-3' ><Link to='/people'>People</Link> </div>
            <div className='col-2' ><Link to='/profile'>Profile</Link></div>
            <div className='col-3' ><Link to='/' onClick={logoutHandler}>Logout</Link></div>
        </nav>
    )
}

export default Navigation;