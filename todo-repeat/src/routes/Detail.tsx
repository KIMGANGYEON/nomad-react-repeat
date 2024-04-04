import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  summary: string;
  genres: string[];
  medium_cover_image: string;
}

function Detail() {
  const [movie, setMovie] = useState<Movie>();
  const { id } = useParams<{ id: string }>();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {movie ? (
        <>
          <p>{movie.title}</p>
          <img src={movie.medium_cover_image} alt="" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Detail;
