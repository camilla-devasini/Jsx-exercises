import logo from './logo.svg';
import './App.css';
import sum from './components/sumTitle.js';

// Write a function that receives two parameters, a and b
// and returns the sum of them within an h2 tag.


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {sum(5,4)}
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
