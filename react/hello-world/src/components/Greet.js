import React from 'react';

// function Greet(props){
//     return <h1>Hello {props.name}</h1>
// }

const Greet=(props)=> {
    
    return (
        <div>
           
            <h1>
                <h1>Hello {props.name} a.k.a {props.heroName} !</h1>
            </h1>
            {props.children}

        </div>
   )
}

export default Greet;