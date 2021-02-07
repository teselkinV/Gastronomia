import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Steps from './Steps';

function Details({match}) {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        fetch(`https://gastronomia-api.herokuapp.com/recipes/${match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRecipe(data)
        })
        .catch((error) => console.log(error));
    }, [])
    
console.log(recipe.methods)
function returnSteps() {
    if (recipe.methods) {
        return recipe.methods.map(step => (
            <Steps 
                        title={step.title}
                        ingridients={step.ingridients}
                        steps={step.steps}
                        time={step.time}
                        key={step.id}
                        />
    )) 
        
    }
}
    return (
        <div>
            <Navbar />
            <div style={{textAlign: "center"}}>
                <h3>{recipe.title}</h3>
                <h5>{recipe.description}</h5>
                <p>{recipe.amount}</p>
                <p>{recipe.time}</p>
                <p>{recipe.price}</p>
                <p>{recipe.difficult}</p>
                <div>
                    {returnSteps()}
                </div>
           </div>
        </div>
    );
}

export default Details;