import '../App.css';
import { useContext } from 'react';
import MovieContext from '../context.js';

var MovieCard = ({ movie }) => {
  const context = useContext(MovieContext);

  var handleSelection = (movie) => {
    console.log(movie);
    context.setSelectedMovies([...context.selectedMovies, movie]);
  };

  return (
    <div
      className="movie-card"
      onClick={() => {
        handleSelection(movie);
      }}
    >
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.original_title}
      />
      <span>{movie.title}</span>
      <span>{movie.vote_average}</span>
    </div>
  );
};

export default MovieCard;
