import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import styles from './Movie.module.css';

export function MovieList() {

    const [movies , setMovies]=useState([]);

    const [searchMovie,setSearchMovie]=useState('');

    useEffect(() =>{
            async function getMovies() {
                const res=await fetch("http://127.0.0.1:8000/api/movie/");
                const data= await res.json();
                setMovies(data.filter( movie => movie.title.toLowerCase().startsWith(searchMovie.toLowerCase())));
            }

            getMovies();

        },
        [searchMovie])

    function onSearchChange(e){
        setSearchMovie(e.target.value);
    }

    return(
        <>
            <div style={{textAlign:"center"}}>
                <br /><input id='searchMovies' type='search' placeholder='search movie' onChange={onSearchChange}/>
                <br /><br /><br />
            </div>

            {movies.length===0 && <h1>Loading ...</h1>}

            <main className={styles['movie-list']}>
            {movies.length!==0 && 
                movies.map((movie) => <Movie key={movie.id} {...movie}/>)
            }
            </main>
        </>
    );
}