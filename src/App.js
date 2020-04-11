import React from 'react';
// import logo from './logo.svg';
  import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Register from './register';
import Login from './login';
import Add from './add'; 
import Display from './display';
import Edit from './edit';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
          	<Link to="/login">Login</Link>
          </li>
          <li>
          	<Link to="/add">Add</Link>
          </li> 
          <li>
            <Link to="/display">Display</Link>
          </li>  
          <li>
            <Link to="/edit">Edit</Link>
          </li>     
   	    </ul>
        </div>


        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/display">
            <Display />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
