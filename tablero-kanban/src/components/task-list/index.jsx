import React, { Fragment, useEffect, useState } from "react";
import './style.css'
import Form from '../form'
import Prueba from "./prueba";

function TaskList(props) {
    const [addTask, setAddTask] = useState(false);
    const [task, setTask] = useState([]);
    const [draw, setDraw] = useState(true);

//inicializo el contador al valor de la local Storage, si no hay valor todavía, lo inicializo en 1
    let counter = localStorage.getItem('counter') ?? 1;  

// función que cambia una variable de estado, para que al hacer click en el'+' para abrir el formulario, se actualice, haga render otra vez, y abra el formulario
    function openForm() {
        addTask === true ? setAddTask(false):setAddTask(true)
        }


// funcion que le paso al formulario como props, para que cuando ingreso una nueva tarea, el form llame a está función, y se modifique la varible de estado para volver a pintar, pero ahora con la nueva tarea guardada
    const drawTaskList = () => {
        draw ? setDraw(false) : setDraw(true);
        addTask ? setAddTask(false) : setAddTask(true)
    }

// está función sería como el componentDidMount que usabamos en la clase, para que al abrir el programa, recoja las tareas de la localStorage y pinte las cards
    useEffect (() => {
        let arr = [];
        for (let i =1; i<counter;i++){
                if (JSON.parse(localStorage.getItem(`task${i}`)!== null)){
                    arr.push(JSON.parse(localStorage.getItem(`task${i}`)))
                }
        }
       setTask(arr)
    }, [counter])

    return (
        <Fragment>
            <div className="taskList__container">
                <div className="taskList__header">
                    <div className="title-counter__wrapper">
                        <div className="counter">12</div>
                        <h3 className="task__title">{props.title}</h3>
                    </div>
                    <button className="button__add" onClick={openForm}>+</button>
                    {props.remove}
                </div>
                {addTask ? <Form> </Form> : ' '}
                {task.map((e) => props.title === e.estado ?<Prueba key={e.id} results={e}></Prueba>:'')}
            </div>
        </Fragment>
    )
}

export default TaskList;
