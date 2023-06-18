import React from 'react'

function FunctionClick(){

    function clickHandler(){
         console.log("button clicked (function click)")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick