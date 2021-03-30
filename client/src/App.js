import './App.css';
import 'axios';
import API_KEY from './config.js';
import { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import axios from 'axios';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then((data) => {
        console.log(data);
      });
    client.onmessage = (message) => {
      console.log(message);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
