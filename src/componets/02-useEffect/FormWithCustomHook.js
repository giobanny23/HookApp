import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

//import { Message } from './Message';
import './effects.css';


export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({

      name:'',
      email:'',
      password:''
      //Giobanny23

  }) ;
  const { name, email, password} = formValues;

        useEffect(() =>{
            console.log('email cambio')
        }, [email]);
        const handleSubmit =(e) =>{
            e.preventDefault();

            console.log( formValues);
        }

    return (
        < form onSubmit={handleSubmit}>
          <h1>useEffect</h1>  
          <hr />

           <div className= "form-group">
              <input 
                type="text"
                name="name"
                className="form-control"
                autoComplete="off"
                placeholder="Tu nombre"
                value={name}
                onChange={handleInputChange}
              />

           </div>
           <div className= "form-group">
              <input 
                type="text"
                name="email"
                className="form-control"
                autoComplete="off"
                placeholder="Tu Email@gmail.com"
                value={email}
                onChange={handleInputChange}
              />

           </div>
           

           <div className= "form-group">
              <input 
                type="text"
                name="password"
                className="form-control"
                autoComplete="off"
                placeholder="**********"
                value={password}
                onChange={handleInputChange}
              />

           </div>

        <button type="submit" className="btn btn-primary">
            Guardar
        </button>

        </form>
    )
}