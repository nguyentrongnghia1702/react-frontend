import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import LoginComponent from './components/LoginComponent';
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponenet';
import UpdateUserComponent from './components/UpdateUserComponent';
function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/login" component = {LoginComponent}></Route>
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/employees" component = {ListUserComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateUserComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
