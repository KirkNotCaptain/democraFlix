import './App.css';
import { getLatest } from './fetch-requests/fetch.js';
import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import ChoicesContainer from './components/choices-container.js';
import MoviesContainer from './components/movies-container.js';
import MovieContext from './context.js';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    getLatest().then((data) => {
      // console.log(data.data.results);
      setPopularMovies(data.data.results);
    });

    client.onmessage = (message) => {
      console.log(message);
    };
  }, []);

  if (popularMovies.length) {
    return (
      <MovieContext.Provider
        value={{ popularMovies, selectedMovies, setSelectedMovies }}
      >
        <div className="App">
          <header className="App-header">
            <h1>DemocraFlix</h1>
          </header>
          <ChoicesContainer />
          <MoviesContainer />
        </div>
      </MovieContext.Provider>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default App;
