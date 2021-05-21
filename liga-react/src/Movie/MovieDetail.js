import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function MovieDetail() {

  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getMovie() {
      const data = await fetch(
        `http://localhost:3001/movies/${id}`
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

      <button>
      <Link to="/movies" >
        Go back
      </Link>
      </button>
    </>
  );
}