import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
      <h1>{movie.title}</h1>

      {movie.ratings.map( (rating) => { return <h3>{rating.source} ":" {rating.value} </h3>})}

      <a href={`https://www.imdb.com/title/${movie.imdbid}`} target="_blank">
        Imdb movie page
      </a>
    </>
  );
}