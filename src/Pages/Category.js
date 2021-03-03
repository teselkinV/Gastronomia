import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';
import CategoryRecipes from '../components/Category/CategoryRecipes';

function Category() {
    return (
        <div>
            <Navbar />
            <h1><Text t="category-title" /></h1>
            <CategoryRecipes />
        </div>
    );
}

export default Category;