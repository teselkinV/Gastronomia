import React from 'react';
import { Link } from 'react-router-dom';

function Card({id, title}) {
    return (
        <div className='recipe'>
            <Link to={`/recipes/${id}`}>
            <h2>{title}</h2>
            </Link>
        </div>
    );
}

export default Card;