import React, {useReducer} from 'react';
import './styles.css';


const initialState =[{
    id:new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {

    const [state] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Hola Mundo</li>
                <li>Hola de Nuevo</li>
                <li>De nuevo a todos</li>                
            </ul>


        </div>
    )
}
