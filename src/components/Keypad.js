// Code Keypad Component Here
import React from 'react';

function Keypad (){

    function changeInput() {
        console.log('Entering password...')
    }

    return (
        <input type="password" onChange={changeInput} />
    )
}

export default Keypad;