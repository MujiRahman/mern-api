import React from 'react';
// import logo from '../../../assest/img/logo/logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Dashboard from '../Dashboard';
import Register from '../Register';
import Login from '../Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* <Switch> */}
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
