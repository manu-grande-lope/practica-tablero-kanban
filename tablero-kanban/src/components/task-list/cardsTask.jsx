function CardsTask(props) {

    const handleStatus = (e) => {
        props.handleStatus(props.results);

        document.forms["hola"].submit();
    }


    const handleClick = (e) => {

        props.handleBorrar(props.results.id);
        console.log(e)

    }






    return (
        <form action="" name="hola">
            <div className="card__style">
                <div className="card__style--h1">
                    <p>{props.results.id} </p>
                    <p className="card__style--p" onClick={handleStatus}>{props.results.tarea}</p>
                </div>
                <p className="card__style--fecha">{props.results.fecha}</p>
                <button className="card__style--button" type="submit" onClick={handleClick}>🗑️</button>
            </div>
        </form>
    )
}
export default CardsTask;