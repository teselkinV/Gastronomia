import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../Language/Language';
import Navbar from '../Navbar'

function Login() {
    return (
        <div>
            <Navbar />
            <h2>Login page</h2>
            <Link to='/register'><Text t='register'/></Link>
        </div>
    );
}

export default Login;