import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Card from '../Recipe/Card';

function CategoryDetails({match}) {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`https://gastronomia-api.herokuapp.com/category/${match.params.id}`)
        .then(res => res.json())
        .then(data => {
            setCategory(data)
        })
        .catch((error) => console.log(error));
    }, []);
    
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
            <Navbar />
            <div>
            {recipes.map(recipe => { 
                if(recipe.categoryId === category.id) {
                    return <Card 
                        id={recipe.id}
                        title={recipe.title}
                        key={recipe.id}
                        methods={recipe.methods}
                        />
                }
            })}
            </div>
        </div>
    );
}

export default CategoryDetails;