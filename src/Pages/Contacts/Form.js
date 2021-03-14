import React, { useState, useEffect } from 'react';
import Main from '../MainPage/Main';

function Form() {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         title: '',
//         message: ''
//     });

//     function handleName(e) {
//         setForm({...form, name: e.target.value})
//         console.log(form)
//     };

//     function handleEmail(e) {
//         setForm({email: e.target.value})
//     };

//     function handleTitle(e) {
//         setForm({title: e.target.value})
//     };

//     function handleMessage(e) {
//         setForm({message: e.target.value})
//     };

//     // function handleSubmit(e) {
//     //     e.preventDefault();
//     //     setForm({submit: true})
//     // }

//    useEffect(() => {
//         fetch("https://formsubmit.co/ajax/gastronomia.teselkin@gmail.com", {
//             method: "POST",
//             headers: { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//         },
//     body: JSON.stringify(form)
//     })
//     .then(response => response.json())
//     .then(data => setForm(data))
//     .catch(error => console.log(error));
//     }, []) 

    return (
        <div>
            <form style={{display: 'inline-grid'}} action="https://formsubmit.co/gastronomia.teselkin@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:3000/contacts" />
                <input type='text' placeholder='Name' name="name" required/>
                <input type='email' placeholder='Email' name="email" required/>
                <input type='text' placeholder='Title' name="title" required/>
                <input type='text' placeholder='Message' name="message" required/>
                <button type='submit' >Send</button>
            </form>
        </div>
    );
}

export default Form;