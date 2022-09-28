import logo from './logo.svg';
import './App.css';

function sum(a,b) {
  return <h2>The sum is {a + b}</h2>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {sum(2,1)}
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
