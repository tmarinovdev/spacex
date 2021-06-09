import logo from './logo.svg';
import './App.css';
// import { SpaceXLaunchesFetch } from './components/FetchLaunches';
import { FetchAxLaunches } from './components/FetchAxioLaunches';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SpaceX launches</h1>
        <FetchAxLaunches />       
      </header>
    </div>
  );
}

export default App;
