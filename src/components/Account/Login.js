import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../Language/Language';
import Navbar from '../Navbar'

function Login() {
    const [signin, setSignin] = useState({
        loginEmail: '',
        loginPassword: ''
    });

    function hanleEmail(e) {
        setSignin({loginEmail: e.target.value})
        console.log(e.target.value)
    };

    function hanlePassword(e) {
        setSignin({loginPassword: e.target.value})
    };

    const submitLogin = useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const handleSubmitLogin = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: signin.loginEmail,
                password: signin.loginPassword
             })
        };
        fetch('http://localhost:3000/', handleSubmitLogin)
            .then(response => response.json())
            .then(console.log())
            .then(user => {
                if(user.id) {
                    this.props.loadUser(user)
                }
            });
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [signin]);


//    useEffect(() => {
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