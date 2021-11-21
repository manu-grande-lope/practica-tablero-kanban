import './style.css'
import { Fragment, useState } from 'react'
import React from 'react';

function Form(props) {
    const [task, setTask] = useState([]);
    const [btnEnabled, setBtnEnabled] = useState(false);
    const [title, setTitle] = useState('');

    let counter = localStorage.getItem('counter') ?? 1;
    let [cont, updatecont] = useState(counter);
    console.log(counter)
    // useEffect(() => {
    //     let arr = [];
    //     for (let i = 1; i < counter; i++) {
    //         if (JSON.parse(localStorage.getItem(`task${cont}`) !== null)) {
    //             arr.push(JSON.parse(localStorage.getItem(`task${i}`)))
    //         } console.log(arr)
    //     }

    //     setTask(arr)
    // }, [cont])



    const textoVacio = (e) => {
        if (e.target.value === "") {
            setBtnEnabled(false);
        } else {
            setBtnEnabled(true);
        }

    }
    const enviar = (e) => {
        if (btnEnabled === true) {
            e.preventDefault();

            const day = new Date();
            const fecha = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()} ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
            updatecont(cont + 1)
            const tarea = {
                id: cont,
                tarea: e.target.text.value,
                estado: props.titleTask,
                fecha: fecha,
                estadoIcono: props.titleTask === 'Done' ? 'Done' : 'Pending'


            }
            setTitle(e.target.text.value);

            localStorage.setItem(`task${cont}`, JSON.stringify(tarea));
            counter++;
            localStorage.setItem('counter', counter)
            props.onUpdateTaskList();
        }

    }


    return (
        <Fragment>
            <form action="" onSubmit={enviar}>
                <textarea name="text" placeholder="Enter a note" onInput={textoVacio}></textarea>
                <div className="boton-container">
                    {btnEnabled ? <button type='submit' className='boton boton-submit'>Add</button>
                        : <button type='submit' className='boton boton-submit btn_opacity'>Add</button>}

                    <button type="reset" className="boton boton-reset" onClick={textoVacio}>Cancel</button>
                </div>
            </form>
        </Fragment>
    )
}
export default Form;