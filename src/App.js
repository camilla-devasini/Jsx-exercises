// Create a variable called hello
// and inizialize it with an h1 tag with the message "Hello, World!".

import logo from './logo.svg';
import './App.css';


function App() {
  const title = <h1>Hello World</h1>;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {title}
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
