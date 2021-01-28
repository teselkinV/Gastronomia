import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';

function Recipes() {
    return (
        <div>
            <Navbar />
            <h1><Text t="recipe-title" /></h1>
        </div>
    );
}

export default Recipes;