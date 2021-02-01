import React from 'react';
import Steps from './Steps';

function Recipe({title, description, time, price, amount, methods}) {
    return (
        <div className='recipe'>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h5>Time {time}</h5>
            <h5>Amount: {amount}</h5>
            <h5>Price: {price}</h5>
            <div>
                {methods.map(step => (
                    <Steps 
                        title={step.title}
                        ingridients={step.ingridients}
                        steps={step.steps}
                        time={step.time}
                        key={step.id}
                        />
                ))}
                
            </div>
        </div>
    );
}

export default Recipe;