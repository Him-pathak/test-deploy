import logo from './logo.svg';
import './App.css';

const fname = process.env.REACT_APP_FIRST_NAME;
const lname = process.env.REACT_APP_LAST_NAME;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello {fname} {lname} <br/>
          making changes to test deploy branch <br/>
          push changes in main to check if it gets deployed
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
