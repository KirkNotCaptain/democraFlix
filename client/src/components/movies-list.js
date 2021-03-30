import '../App.css';
import { useContext } from 'react';
import MovieContext from '../context.js';

var MoviesList = () => {
  const context = useContext(MovieContext);
  console.log(context);
  return (
    <ol>
      {context.map((movie) => {
        return <li>{movie['title']}</li>;
      })}
    </ol>
  );
};

export default MoviesList;
