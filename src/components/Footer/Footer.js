import React from 'react';

function Footer() {
    return (
        <div style={{backgroundColor: 'grey'}}>
            <h3>Footer</h3>
            <p>Navlink 1</p>
            <p>Navlink 2</p>
            <p>Navlink 3</p>
            <hr />
            <div className='down-footer'>
                <a href='#'>Term of use</a>
                <a href='#'>Privacy policy</a>
                <a href='#'>All rights reserved</a>
            </div>
        </div>
    );
}

export default Footer;