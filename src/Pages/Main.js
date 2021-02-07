import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';

function Main({data}) {
    return (
        <div>
            <Navbar />
            <h1><Text t="main-title" /></h1>
            
        </div>
    );
}

export default Main;