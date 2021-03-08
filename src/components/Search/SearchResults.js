import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SearchRecipes from '../Recipe/SearchRecipes';

function SearchResults() {
    return (
        <div>
            <Navbar />
            
            <SearchRecipes />
            <Footer />
        </div>
    );
}

export default SearchResults;