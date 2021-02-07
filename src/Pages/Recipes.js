import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';
import Reci from '../components/Reci'

function Recipes() {
    return (
        <div>
            <Navbar />
            <h1><Text t="recipe-title" /></h1>
            <Reci />
        </div>
    );
}

export default Recipes;