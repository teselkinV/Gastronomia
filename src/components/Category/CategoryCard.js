import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({id, title}) {
    return (
        <div className='recipe'>
            <Link to={`/category/${title}`}>
            <h2>{title}</h2>
            </Link>
        </div>
    );
}

export default CategoryCard;