import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link to='/feed'><h1>Bitbook</h1></Link>
                    </div>

                    <Navigation /></div>
            </div>
        </header>
    )
}

export default Header;