import logo from './logo.svg';
import { initializeApp } from "firebase/app";
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyC6xwnd-eyn3gf7V1CNgC7wyz4wfXdDtTI",
  authDomain: "project-managment-2024.firebaseapp.com",
  projectId: "project-managment-2024",
  storageBucket: "project-managment-2024.appspot.com",
  messagingSenderId: "646297068260",
  appId: "1:646297068260:web:d516632ddbc58ed62142f1"
};

const App = () => {
  const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
