import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';

import '../02-useEffect/effects.css';

export const Layout = () => {

    const { counter, increment } =  useCouter(1);
    const { data } = useFetch( `` );
    
    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

                <blockquote className="blockquote text-right">
                <p className="mb-0"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
                </blockquote>
            
           

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
