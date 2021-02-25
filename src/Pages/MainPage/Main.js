import React from 'react';
import { Text } from '../../components/Language/Language';

import Navbar from '../../components/Navbar';
import Welcome from './Welcome';
import FavoriteRecipes from '../../components/CardsWithRecipe/FavoriteRecipes';
import NewRecipes from '../../components/CardsWithRecipe/NewRecipes';
import BasicTechniques from '../../components/CardsWithRecipe/BasicTechniques';
import SummerCollection from '../../components/CollectionsOfRecipes/SummerCollection';
import MousseCakesCollection from '../../components/CollectionsOfRecipes/MousseCakesCollection';
import Footer from '../../components/Footer/Footer';

function Main() {
    return (
        <div>
            <Navbar />
            <h1><Text t="main-title" /></h1>
            <Welcome />
            <FavoriteRecipes />
            <SummerCollection />
            <NewRecipes />
            <MousseCakesCollection />
            <BasicTechniques />
            <Footer />
        </div>
    );
}

export default Main;