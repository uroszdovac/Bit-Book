import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='row col-4 offset-5'>
            <div className='col'><Link className="nav-link" to='/feed'>Feed</Link></div>
            <div className='col'><Link className="nav-link" to='/people'>People</Link> </div>
            <div className='col'><Link className="nav-link" to='/profile'>Profile</Link></div>
        </nav>
    )
}

export default Navigation;