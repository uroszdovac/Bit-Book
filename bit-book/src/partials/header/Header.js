import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row"><div className="col-3">
                    <h1>Bitbook</h1>
                </div>
                    <Navigation /></div>
            </div>
        </header>
    )
}

export default Header;