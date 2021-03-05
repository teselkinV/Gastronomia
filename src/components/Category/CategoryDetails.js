import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Recipe from '../Recipe/Recipe';

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
    
    return (
        <div>
            <Navbar />
            <Recipe category={category}/>
        </div>
    );
}

export default CategoryDetails;