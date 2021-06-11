import React from 'react';
import './App.css';
import { FetchAxLaunches } from './components/FetchAxioLaunches';
import { Launch } from './components/Launch';
import { PageNotFound } from './components/404';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>SpaceX launches</h1>
      <Router>
        <Switch>
          <Route exact path="/" ><FetchAxLaunches /></Route>
          <Route path="/launch"><Launch /></Route>
          <Route path="/404"><PageNotFound /></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;