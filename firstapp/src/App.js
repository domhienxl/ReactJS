import logo from './logo.svg';
import './App.css';
import Xe from './Xe';

function App() {
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
        <Xe color='red' value='Toi la chiec xe do'/>
        <Xe color='blue' value='Toi la chiec xe xanh'/>
      </header>
    </div>
  );
}

export default App;
