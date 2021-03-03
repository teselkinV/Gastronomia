import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';



function CategoryRecipes() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://gastronomia-api.herokuapp.com/category')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    }, [])

    return (
        <div>
            {categories.map(category => (
                <CategoryCard 
                    id={category.id}
                    title={category.title}
                    key={category.id}
                    methods={category.methods}
                    />
            ))}
        </div>
    );
}

export default CategoryRecipes;