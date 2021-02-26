import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

function SearchResults() {
    return (
        <div>
            <Navbar />
            <h1>Search results</h1>
            <form>
                <input
                    type='text'
                    name='search'
                    placeholder='Search food...'
                    />
            </form>
            <h3>List of results</h3>
            <Footer />
        </div>
    );
}

export default SearchResults;