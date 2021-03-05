import React from 'react';

function Form() {
    return (
        <div>
            <form style={{display: 'inline-grid'}}>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type='text' placeholder='Title' />
                <input type='text' placeholder='Message' />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}

export default Form;