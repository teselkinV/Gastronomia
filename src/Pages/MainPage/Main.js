import React from 'react';
import { Text } from '../../components/Language/Language';

import Navbar from '../../components/Navbar';
import Welcome from './Welcome';
import LatestRecipes from '../../components/LatestRecipes';

function Main() {
    return (
        <div>
            <Navbar />
            <h1><Text t="main-title" /></h1>
            <Welcome />
            <LatestRecipes />
        </div>
    );
}

export default Main;