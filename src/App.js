import logo from './logo.svg';
import './App.css';


function sayHello(name)  {
  return <h1>Hello, {name}</h1>
}


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

//EXERCISE JSX-03
//What happens if the name variable is not passed to the function?
//If the name variable is not passed, the name is not rendered in the browser

//EXERCISE JSX-04
//What happens if the name variable contains a JSX expression instead of a string?
//It is ok to include a JSX Expression: when we use the curly brackets {}
//we can include both Javascript and JSX code, that in fact is 
// transpiled into Javascript.