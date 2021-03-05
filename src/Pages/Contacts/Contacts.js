import React from 'react';
import Navbar from '../../components/Navbar';
import Faq from './Faq';
import Form from './Form';
import Address from './Address';
import Footer from '../../components/Footer/Footer';

function Contacts() {
    return (
        <div>
            <Navbar />
            <h1>Contacts page</h1>
            <Form />
            <Address />
            <Faq />
            <Footer />
        </div>
    );
}

export default Contacts;