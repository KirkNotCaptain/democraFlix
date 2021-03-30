import { createContext } from 'react';

const MovieContext = createContext({
  popularMovies: [],
  selectedMovies: [],
  setSelectedMovies: () => {},
});

export default MovieContext;
