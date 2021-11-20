function CardsTask(props){
    return(
        <div className="card__style">
            <div className="card__style--h1">
            <p>{props.results.id} </p>
            <p className="card__style--p">{props.results.tarea}</p>
            </div>
            <p className="card__style--fecha">{props.results.fecha}</p>
        </div>
    )
}
export default CardsTask;