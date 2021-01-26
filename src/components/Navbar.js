import React from 'react';
import { Link } from 'react-router-dom';

import Darkmode from './Darkmode/Darkmode';

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar-list'>
                <li className='link'><Link to='/'>Main</Link></li>
                <li className='link'><Link to='/category'>Category</Link></li>
                <li className='link'><Link to='/recipe'>Recipe</Link></li>
                <li className='link'><Darkmode /></li>
            </ul>
        </div>
    );
}

export default Navbar;