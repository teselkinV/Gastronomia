import React, { useState, useEffect } from 'react';
import Card from './Card';


function SearchRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch('https://gastronomia-api.herokuapp.com/recipes')
        .then(res => res.json())
        .then(data => {
            setRecipes(data)
        })
    }, [query])

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function submitSearch(e) {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <div>
            <h1>Search results</h1>
            <form style={{display:'flex', justifyContent: 'center'}}
                onSubmit={submitSearch}>
                <input 
                    type='text'
                    name='search'
                    placeholder='search'
                    value={search}
                    onChange={handleSearch}
                    />
                </form>

            {recipes
                .filter(recipe => {
                    return recipe.title.toLowerCase().includes(query.toLowerCase())})
                .map(recipe => {
                    return <Card 
                        id={recipe.id}
                        title={recipe.title}
                        key={recipe.id}
                        methods={recipe.methods}
                        />
                    })
                }
        </div>
    );
}

export default SearchRecipes;