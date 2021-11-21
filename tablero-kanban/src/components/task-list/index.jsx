import React, { Fragment, useEffect, useState } from "react";
import './style.css'
import Form from '../form'
import CardsTask from "./cardsTask";

function TaskList(props) {
    const [addTask, setAddTask] = useState(false);
    const [task, setTask] = useState([]);
    const [draw, setDraw] = useState(true);
    let [texto, setTexto] = useState(props.texto);

//Contador en local storage, se inicializa en 1
    let counter = localStorage.getItem('counter') ?? 1;  

// Abre el form
    function openForm() {
        addTask === true ? setAddTask(false):setAddTask(true)
        }


// funcion que le paso al formulario como props, para que cuando ingreso una nueva tarea, el form llame a está función, y se modifique la varible de estado para volver a pintar, pero ahora con la nueva tarea guardada.

    const drawTaskList = () => {
        draw ? setDraw(false) : setDraw(true);
        addTask ? setAddTask(false) : setAddTask(true)
    }
  

// Counter que suma +1 en las task lists, hay que ver como hacer que recoja lo que hay en cada una

    useEffect (() => {
        console.log(texto)
        let arr = [];
        setTexto('asd')
       
        for (let i =1; i<counter;i++){
            let card=localStorage.getItem(`task${i}`);
            card=JSON.parse(card);
                if ((card!== null)&&(card.tarea.includes(texto))){
                    arr.push(card)
                }
        }
       setTask(arr)
    
      
      
    
    }, [counter])


    
    const handleStatus = (childata) => {
       
       
            if (childata.estado==='To do') {
               
                childata.estado = 'In progress';
                localStorage.setItem(`task${childata.id}`, JSON.stringify(childata));
                console.log(childata)
                
            }else if (childata.estado==='In progress') {
               
                childata.estado = 'Done';
                localStorage.setItem(`task${childata.id}`, JSON.stringify(childata));
                console.log(childata)
                
            }else{
                childata.estado = 'In progress';
                localStorage.setItem(`task${childata.id}`, JSON.stringify(childata));
            }

         
        }

    const handleBorrar=(childata)=>{
     
        localStorage.removeItem(`task${childata}`);
            
    }
    const handleBorrarTodo=()=>{
       
        for (let i = 0; i < counter; i++) {
            let card=localStorage.getItem(`task${i}`);
            card=JSON.parse(card)            
            if(card?.estado==='Done'){
                localStorage.removeItem(`task${i}`);
            }
            
        }
        document.location.reload() 
            
    }

    const numeroTareas=(e)=>{
        let contDone=0;
        let contPending=0;
        let contTodo=0;
        for (let i = 0; i < counter; i++) {
            let card=localStorage.getItem(`task${i}`);
            card=JSON.parse(card)            
            if(card?.estado==='Done'){
                contDone++;
            }else if(card?.estado==='To do'){
                contTodo++;
            }else if(card?.estado==='In progress'){
                contPending++;
            }

        }console.log(contDone,contPending,contTodo)
        console.log(props.title)
        if (props.title==='Done') {
            return contDone;
        }else if(props.title==='In progress'){
            return contPending;
        }else if(props.title==='To do'){
            return contTodo
        }
        
     
    }

    return (
        <Fragment>
        
            <div className="taskList__container">
                <div className="taskList__header">
                    <div className="title-counter__wrapper">
                        
                        <div className="counter">{numeroTareas()}</div> 
                        <h3 className="task__title">{props.title}</h3>
                    </div>
                    <button className="button__add" onClick={openForm}>+</button>
                    <p onClick={handleBorrarTodo} className="clearAll">{props.remove}</p>
                </div>
                {addTask ? <Form onUpdateTaskList={drawTaskList} titleTask={props.title}> </Form> : ' '}
                {task.map((e) => props.title === e.estado ?<CardsTask  handleBorrar={handleBorrar} handleStatus={handleStatus} key={e.id} results={e}></CardsTask>:'')}
            </div>
        </Fragment>
    )
}

export default TaskList;
