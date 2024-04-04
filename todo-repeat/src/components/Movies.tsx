import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  summary: string;
  genres: string[];
  medium_cover_image: string;
}

function Movies({ id, medium_cover_image, title, summary, genres }: Movie) {
  return (
    <div>
      <img src={medium_cover_image} alt="title" />
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movies;
