function CardsTask(props){
    return(
        <div className="card__style">
            <p>{props.results.id}</p>
            <p>{props.results.tarea}</p>
            <p>{props.results.fecha}</p>
        </div>
    )
}
export default CardsTask;