import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import "./App.css";

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="Login">
      <div className="LoginBox">
        <Router>
          <Switch>
            <Route exact path = "/"><Login /></Route>
            <Route path = "/register"><Register/></Route>
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;