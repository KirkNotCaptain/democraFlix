import '../App.css';
import './movies-list';
import MoviesList from './movies-list';

var MoviesContainer = () => {
  return (
    <>
      <div className="movies-container">
        <h1 className="title">User movies</h1>
        <MoviesList />
      </div>
    </>
  );
};

export default MoviesContainer;
