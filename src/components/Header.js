import React from 'react';
import {LOGO_URL} from '../utils/constants';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={LOGO_URL} width="100" />
            </div>
            <div className="navItems">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About US</a></li>
                    <li><a href="">Contact US</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;