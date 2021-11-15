import './style.css'
import { Fragment, useState } from 'react'
import React from 'react';

function Form() {

   let [texto,updateText]= useState('');

  const  textoVacio=e =>{
        if(e.target.defaultValue===""){
            console.log(e);
        }
    }
    const cancel=()=>{
        
        updateText('')
    }
   
    return (
        <Fragment>
          <textarea placeholder="Enter a note" onInput={textoVacio}>{texto}</textarea>
          <div>
              <button>Add</button>
              <button onClick={cancel}>Cancel</button>
          </div>
        </Fragment>
    )
}
export default Form;