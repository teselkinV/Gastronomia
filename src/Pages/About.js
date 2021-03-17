import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';
import FavoriteRecipes from '../components/CardsWithRecipe/FavoriteRecipes';
import BreadCollection from '../components/CollectionsOfRecipes/BreadCollection';
import Footer from '../components/Footer/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <h1><Text t="about-us" /></h1>
            <h3>Banner</h3>
            <h4>My photo</h4>
            <p>Some text about me and why I do this.</p>
            <FavoriteRecipes />
            <BreadCollection />
            <Footer />
        </div>
    );
}

export default About;