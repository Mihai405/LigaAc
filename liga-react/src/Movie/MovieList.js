import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import styles from './Movie.module.css';

export function MovieList() {

    const [movies , setMovies]=useState([]);

    useEffect(() =>{
            async function getMovies() {
                const res=await fetch("http://localhost:3001/movies?_limit=10");
                const data= await res.json();
                setMovies(data);
            }

            getMovies();

        },
        [])

        

    return(
        <>
            {movies.length===0 && <h1>Loading ...</h1>}

            <main className={styles['movie-list']}>
            {movies.length!==0 && 
                movies.map((movie) => <Movie key={movie.id} {...movie}/>)
            }
            </main>
        </>
    );
}