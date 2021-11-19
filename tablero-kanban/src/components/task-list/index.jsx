import React, { Fragment, useEffect, useState } from "react";
import './style.css'
import Form from '../form'
import CardsTask from "./cardsTask";

function TaskList(props) {
    const [addTask, setAddTask] = useState(false);
    const [task, setTask] = useState([]);
    const [draw, setDraw] = useState(true);

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

// Debería pintar las cards del form de Pedro pero no tira
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
                        <div className="counter">00</div>
                        <h3 className="task__title">{props.title}</h3>
                    </div>
                    <button className="button__add" onClick={openForm}>+</button>
                    {props.remove}
                </div>
                {addTask ? <Form onUpdateTaskList={drawTaskList} titleTask={props.title}> </Form> : ' '}
                {task.map((e) => props.title === e.estado ?<CardsTask key={e.id} results={e}></CardsTask>:'')}
            </div>
        </Fragment>
    )
}

export default TaskList;
