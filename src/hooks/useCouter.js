import { useState } from "react"


export const useCouter = ( initialState = 10)  => {
    
    const [state, setstate] = useState(initialState)

    const reset = () =>{
        setstate( initialState );

    }

    const increment = ( factor = '') =>{
        setstate( state + factor);

    }

    const decrement = (factor = '') =>{
        setstate( state - factor);
    }

    return{
        state,
        increment,
        decrement,
        reset
    };
}
