import React from 'react';
import Card from './Card'

function List({recipes}) {
    return (
        <div>
            {recipes.map(recipe => {
                    return <Card 
                        id={recipe.id}
                        title={recipe.title}
                        key={recipe.id}
                        methods={recipe.methods}
                        />
                }
            )}
        </div>
    );
}

export default List;