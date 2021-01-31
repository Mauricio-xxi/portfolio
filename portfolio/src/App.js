import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to my personal web, deployed at AWS
        </h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/alvaro-mauricio-camacho-davila/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <h2>
          Work in progress...
        </h2>
      </header>
    </div>
  );
}

export default App;
