import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="Este es un mensaje" name="Antony" />
      </header>
    </div>
  );
}

export default App;
