import logo from './logo.svg';
import './App.css';
import sayHello from './components/greetingTitle.js';

// Write a function that receives a name argument and returns a h1 tag
// with the name variable appended to the "Hello, " string.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {sayHello("Camilla")}
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
