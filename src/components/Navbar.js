import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from './Language/Language';

import Darkmode from './Darkmode/Darkmode';
import Selector from '../components/Language/Selector';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navbar-list'>
                <li className='link'><Link to='/'><Text t="main" /></Link></li>
                <li className='link'><Link to='/about'><Text t="about" /></Link></li>
                <li className='link'><Link to='/recipes'><Text t="recipes" /></Link></li>
                <li className='link'><Darkmode /></li>
                <li><Selector /></li>
            </ul>
        </div>
    );
}

export default Navbar;