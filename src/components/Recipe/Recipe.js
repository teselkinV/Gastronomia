import React, { useState, useEffect } from 'react';
import Card from './Card';



function Recipe() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://gastronomia-api.herokuapp.com/recipes')
        .then(res => res.json())
        .then(data => {
            setRecipes(data)
        })
    }, [])

    return (
        <div>
            {recipes.map(recipe => (
                <Card 
                    id={recipe.id}
                    title={recipe.title}
                    key={recipe.id}
                    methods={recipe.methods}
                    />
            ))}
        </div>
    );
}

export default Recipe;