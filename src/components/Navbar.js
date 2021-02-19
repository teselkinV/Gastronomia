import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from './Language/Language';

// Modes components
import Darkmode from './Darkmode/Darkmode';
import Selector from '../components/Language/Selector';

import Login from '../components/Account/Login';

const Navbar = () => {
    const [route, setRoute] = useState({
        autorization: 'guest'
      })

    const onRouteChange = () => {
          setRoute({autorization: 'user'})
          console.log("info", route.autorization)
      }
    return (
        <div className='navbar'>
            <ul className='navbar-list'>
                <li className='link'><Link to='/'><Text t="main" /></Link></li>
                <li className='link'><Link to='/about'><Text t="about" /></Link></li>
                <li className='link'><Link to='/recipes'><Text t="recipes" /></Link></li>
                <li className='link'><Darkmode /></li>
                <li><Selector /></li>
                {route.autorization === 'guest' 
                ? <li className='link'>
                    <button onRouteChange={onRouteChange}>
                        <Link to='/login'><Text t="login" /></Link>
                    </button></li> 
                :  <li><button>Sign out</button></li>
                }
            </ul>
        </div>
    );
}

export default Navbar;