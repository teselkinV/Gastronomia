import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';
import Recipe from '../components/Recipe/Recipe'

function Recipes() {
    return (
        <div>
            <Navbar />
            <h1><Text t="recipe-title" /></h1>
            <Recipe />
        </div>
    );
}

export default Recipes;