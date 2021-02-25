import React, { useState, useEffect } from 'react';
import Card from '../Recipe/Card';

function FavoriteRecipes() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://gastronomia-api.herokuapp.com/recipes')
        .then(res => res.json())
        .then(data => {
            setRecipes(data)
        })
    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Favorite Recipes</h2>
            {recipes.map(recipe => { 
                if(recipe.category === 'baking') {
                    return <Card 
                        id={recipe.id}
                        title={recipe.title}
                        key={recipe.id}
                        />
                }
                
            })}
        </div>
    );
}

export default FavoriteRecipes;