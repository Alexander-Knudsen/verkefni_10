import logo from './sid_the_sloth.jpg';
import './App.css';
import CurrentLocation from './CurrentLocation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hæ! Ég veit hvar þú ert...
        </p>
        <div>
          <CurrentLocation/>
        </div>
      </header>
    </div>
  );
}

export default App;
