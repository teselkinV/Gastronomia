import React, { useState, useEffect } from 'react';

import Recipe from './Recipe';

function Api() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://gastronomia-api.herokuapp.com/recipes')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRecipes(data)
        })
    }, [])

    return (
        <div>
            <div>{recipes.map(recipe => (
            // <div key={recipe.id}>Title: <span>{recipe.title}</span></div>
            <Recipe 
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
                price={recipe.price}
                amount={recipe.amount}
                key={recipe.id}
                methods={recipe.methods}
                />
            ))}</div>
        </div>
    );
}

export default Api;