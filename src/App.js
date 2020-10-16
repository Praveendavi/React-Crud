import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layouts/Navbar'
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import User from './users/User'

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/user/add" component={AddUser}></Route>
        <Route exact path="/user/edit/:id" component={EditUser}></Route>
        <Route exact path="/user/:id" component={User}></Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
