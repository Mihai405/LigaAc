import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import styles from './Movie.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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

    const classes = useStyles();
    
    return(
        <>
            <div style={{textAlign:"center"}}>
                <br />
                    <TextField id='searchMovies' label="search movie" variant="outlined" onChange={onSearchChange}/>
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