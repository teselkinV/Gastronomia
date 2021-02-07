import React from 'react';

function Steps({ingridients, steps, title, time}) {
    function timeStep() {
        if(time) {
            return (<p>Time for step: {time}</p>)
        } else {
            return null
        }
    }
       

    return (
        <div>
            <h4>{title}</h4>
           <div>{timeStep()}</div>
            <ul>
                {ingridients.map((amount) => (
                    <>
                    <li>{Object.entries(amount)}</li>
                    </>
                ))}
            </ul>
            <ol>
                {steps.map((num, st) => (
                    <li><span style={{fontSize: '20px'}}>{Object.keys(num)} </span>{Object.values(num)}</li>
                ))}
            </ol>
        </div>
    );
}

export default Steps;