import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';
import Api from '../components/Api';

function Main({resipe}) {
    return (
        <div>
            <Navbar />
            <h1><Text t="main-title" /></h1>
            <Api resipe={resipe}/>
        </div>
    );
}

export default Main;