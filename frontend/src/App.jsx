import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const App = () => {

  const [state, setState] = useState("")

  useEffect(()=> {

    axios.get("http://localhost:4000/home")
      .then(function (response) {
        setState(response.data)
      })
      .catch(function (error) {
        setState("Deu ruim");
      });

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          {state}
        </span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
