import { useEffect, useState } from "react";
import { useParams } from "react-router";



export function MovieDetail() {

  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getMovie() {
      const data = await fetch(
        `http://127.0.0.1:8000/api/movie/${id}`
      ).then((res) => res.json());

      setMovie(data);
    }

    getMovie();
  }, [id]);

  if (!movie) {
    return <h2>Loading ...</h2>;
  }
  return (
    <>
    <div >

        <h1>{movie.title}</h1>

        <a href={`https://www.imdb.com/title/${movie.imdbid}`} target="_blank">
          <img src={movie.poster} alt="poster" />
        </a>
        <br />

        <span>Genre:{movie.genre}</span>
        <br />

        {movie.plot}
        <br />
        <hr />

        <span>Director: {movie.director}</span>
        <br />
        <hr />

        <span>Writers: {movie.writer}</span>
        <br />
        <hr />

        <span>Actors: {movie.actors}</span>
      </div>

      <div>
        <br /><br /><hr />
        Ratings:<br />
        {
          movie.ratings.map( (rating) => { return <>{rating.source} ":" {rating.value} <br /></>})}
        <hr />
      </div>
    </>
  );
}