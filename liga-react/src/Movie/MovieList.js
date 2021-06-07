import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import styles from './Movie.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {MyPagination} from "./MyPagination";



export function MovieList() {

    const [movies , setMovies]=useState([]);
    const [searchMovie,setSearchMovie]=useState('');
    const [currentPage,setCurrentPage]=useState(1);
    const [moviesPerPage]=useState(21);
    const [totalMovies,setTotalMovies]=useState(0);
    useEffect(() =>{
        async function getMovies() {
            if(searchMovie===""){
                const res=await fetch(`http://127.0.0.1:8000/api/movie/?page=${currentPage}`);
                const data= await res.json();
                setMovies(data.results);
                setTotalMovies(data.count);
            }else{
                const res=await fetch(`http://127.0.0.1:8000/api/movie/?page=${currentPage}&search=${searchMovie}`);
                const data= await res.json();
                setMovies(data.results);
                setTotalMovies(data.count);
            }
        }

            getMovies();

        },
        [searchMovie,currentPage])

    function onSearchChange(e){
        setSearchMovie(e.target.value);
        paginate(1);
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
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
            {
                movies.length!==0 && 
                movies.map((movie) => <Movie key={movie.id} {...movie}/>)
            }
            </main>

            {movies.length!==0 && <MyPagination 
                moviesPerPage={moviesPerPage}
                totalMovies={totalMovies}
                paginate={paginate}
                searchMovie={searchMovie}
            />}
        </>
    );
}