import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../Language/Language';
import Navbar from '../Navbar'

function Login() {
    // State
    const [signin, setSignin] = useState({
        loginEmail: '',
        loginPassword: ''
    });

    function hanleEmail(e) {
        setSignin({...signin, loginEmail: e.target.value})
    };

    function hanlePassword(e) {
        setSignin({...signin, loginPassword: e.target.value})
    };

    // Fetch fron server

    const submitLogin = useEffect(() => {
        console.log(signin)
        const handleSubmitLogin = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: signin.loginEmail,
                password: signin.loginPassword
             })
        };
        fetch('https://rocky-crag-65353.herokuapp.com/signin', handleSubmitLogin)
            .then(response => response.json())
            .then(console.log())
            .then(user => {
                if(user.id) {
                    console.log(user)
                }
            });
    }, []);

//     const submitLogin = useEffect(() => {
//     fetch('http://localhost:3000/signin')
//     .then(res => res.json())
//     .then(data => {
//         setSignin(data)
//     })
// }, [])
   

    return (
        <div>
            <Navbar />
            <form>
                <input 
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={hanleEmail}
                    />
                    <br/>
                <input 
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={hanlePassword}
                    />
                    <br/>
                <button 
                    type='submit'
                    onSubmit={submitLogin}
                    >Submit</button>    
            </form>
            <p>Don't have account?</p>
            <Link to='/register'><Text t='register'/></Link>
        </div>
    );
}

export default Login;