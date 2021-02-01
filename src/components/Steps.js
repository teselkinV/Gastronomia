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
                {ingridients.map(ingridient => (
                    <>
                    <li>{ingridient[1]}</li>
                    <li>{ingridient[2]}</li>
                    <li>{ingridient[3]}</li>
                    <li>{ingridient[4]}</li>
                    <li>{ingridient[5]}</li>
                    <li>{ingridient[6]}</li>
                    <li>{ingridient[7]}</li>
                    <li>{ingridient[8]}</li>
                    <li>{ingridient[9]}</li>
                    <li>{ingridient[10]}</li>
                    </>
                ))}
            </ul>
            <ol>
                {steps.map(st => (
                    <li>{st[1]}</li>
                ))}
            </ol>
        </div>
    );
}

export default Steps;