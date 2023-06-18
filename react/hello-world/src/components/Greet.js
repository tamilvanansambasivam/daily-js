import React from 'react';

// function Greet(props){
//     return <h1>Hello {props.name}</h1>
// }

const Greet = props => {
    const { name, heroName, children } = props
    return (
        <div>

            <h1>
                <h1>Hello {name} a.k.a {heroName} !</h1>
            </h1>
            {children}

        </div>
    )
}

export default Greet;