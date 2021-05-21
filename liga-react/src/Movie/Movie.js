import { Link } from "react-router-dom";


export function Movie({ id , poster , title}){
    return(
        <>
        <article>
            <Link to={`/movies/${id}`} >
                <img src={poster} alt="poster" />
                <h2>{title}</h2>
            </Link>
        </article> 
        </>
    )
}