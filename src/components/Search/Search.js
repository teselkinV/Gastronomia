import React, { useState, useEffect } from 'react';
import Card from '../Recipe/Card';

function Search() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    // const [query, setQuery] = useState('');

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    // function submitSearch(e) {
    //     // e.preventDefault();
    //     setQuery(search);
    // }

   
    useEffect(() => {
        fetch('https://gastronomia-api.herokuapp.com/recipes')
        .then(res => res.json())
        .then(data => {
            setRecipes(data)
        })
    },[])

    // console.log(recipes)

    return (
        <div>
            <form>
                <input 
                    type='text'
                    name='search'
                    placeholder='search'
                    value={search}
                    onChange={handleSearch}
                    />
            </form>
            <div>
            {/* {recipes.filter(recipe => { 
                if(recipe.title.toLowerCase().includes(search.toLowerCase())) {

                    return <Card 
                        id={recipe.id}
                        title={recipe.title}
                        key={recipe.id}
                        methods={recipe.methods}
                        />
                }
                
                }
            )} */}
        </div>
        </div>
    );
}

export default Search;