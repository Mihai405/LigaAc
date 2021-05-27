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

        <span>Metascore : {movie.metascore}</span>
        <br />
        <hr />

        <span>Released in : {movie.year}</span>
        <br />
        <hr />

        <span>Genre : {movie.genre}</span>
        <br />
        <hr />

        <span>Type : {movie.type}</span>
        <br />
        <hr />

        <span>Plot : {movie.plot}</span>{movie.plot}
        <br />
        <hr />

        <span>Director : {movie.director}</span>
        <br />
        <hr />

        <span>Writers : {movie.writer}</span>
        <br />
        <hr />

        <span>Actors : {movie.actors}</span>
        <br />
        <hr />

        <span>Production : {movie.production}</span>
        <br />
        <hr />

        <span>Country : {movie.country}</span>
        <br />
        <hr />

        <span> Language : {movie.language}</span>
        <br />
        <hr />

        <span>Awards : {movie.awards}</span>
        <br />
        <hr />

      </div>

      <div>
        Ratings : <br />
        {
          movie.ratings.map( (rating) => { return <> {rating.source} :" {rating.value} <br />
          </>})}
      </div>
    </>
  );
}