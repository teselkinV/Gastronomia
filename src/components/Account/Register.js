import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../Language/Language';
import Navbar from '../Navbar'

function Register() {
    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleName(e) {
        setRegister({name: e.target.value})
    };
    function handleEmail(e) {
        setRegister({email: e.target.value})
    };
    function handlePassword(e) {
        setRegister({password: e.target.value})
    };

     const submitRegister = useEffect(() => {
        const handleSubmitRegister = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: register.name,
                email: register.email,
                password: register.password
             })
        };
        fetch('https://rocky-crag-65353.herokuapp.com/register', handleSubmitRegister)
            .then(response => response.json())
            .then(console.log())
            .then(user => {
                if(user.id) {
                    console.log(user)
                }
            });
    }, []);

    return (
        <div>
        <Navbar />
        <form>
            <input 
                type='text'
                placeholder='Name'
                name='name'
                onChange={handleName}
                />
                <br/>
            <input 
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleEmail}
                />
                <br/>
            <input 
                type='password'
                placeholder='Password'
                name='password'
                onChange={handlePassword}
                />
                <br/>
            <button 
                type='submit'
                onSubmit={submitRegister}
                >Submit</button>    
        </form>
        <p>Do you have account?</p>
        <Link to='/login'><Text t='login'/></Link>
    </div>
    );
}

export default Register;