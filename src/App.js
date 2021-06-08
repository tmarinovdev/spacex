import logo from './logo.svg';
import './App.css';
import { SpaceXLaunchesFetch } from './components/FetchLaunches';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SpaceX launches</h1>
        <SpaceXLaunchesFetch />       
      </header>
    </div>
  );
}

export default App;
