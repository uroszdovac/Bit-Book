import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="row">
            <h1 className="col-3">Bitbook</h1>
            <Navigation />
        </header>
    )
}

export default Header;