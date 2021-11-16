import './style.css'
import { Fragment, useState } from 'react'
import React from 'react';
import { useEffect } from 'react';

function Form() {
    const [task, setTask] = useState([]);
 let [cont,updatecont]= useState(0);
    useEffect (() => {
        let arr = [];
        for (let i =1; i<cont;i++){
                if (JSON.parse(localStorage.getItem(`task${cont}`)!== null)){
                    arr.push(JSON.parse(localStorage.getItem(`task${i}`)))
                }
        }
       setTask(arr)
    }, [cont])

   let [texto,updateText]= useState('');
  

  const  textoVacio=e =>{
        if(e.target.defaultValue===""){
           
        }
    }
  
    const enviar= (e)=>{
        e.preventDefault();
        updatecont(cont+1)
    const tarea={
      id:cont,
      tarea: e.target.text.value
      
  }
    
  localStorage.setItem(`task${cont}`, JSON.stringify(tarea));
    }
    const pintar=()=>{
      localStorage.getItem(`task${cont}`)
      
  }

    return (
        <Fragment>
        <form action="" onSubmit={enviar}>
          <textarea name="text" placeholder="Enter a note" onInput={textoVacio}></textarea>
          <div>{task}</div>
          <div>
              <button type="submit">Add</button>
              <button type="reset">Cancel</button>
          </div>
        </form>
        </Fragment>
    )
}
export default Form;