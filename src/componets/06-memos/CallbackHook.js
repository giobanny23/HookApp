import React, {useState, useCallback} from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';
import { useCouter } from '../../hooks/useCouter';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10);

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback((num) => {
            setCounter( c => c + num);
            },[setCounter])

    return (
        <div>
            <hi1>useCallback Hook: { counter }</hi1>
            <hr/>


            <ShowIncrement increment ={ increment }/>
        </div>
    )
}
