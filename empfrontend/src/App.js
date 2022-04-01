import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Routes,  Switch } from 'react-router-dom'
import ListComponent from './components/ListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateComponent from './components/CreateComponent';
import UpdateComponent from './components/UpdateComponent';
import ViewComponent from './components/ViewComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                <Switch> 
                          <Route path = "/" exact component = {ListComponent}></Route>
                          <Route path = "/employees" component = {ListComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewComponent}></Route>
                           <Route path = "/update-employee/:id" component = {UpdateComponent}></Route> 
                    </Switch>
                </div>
                <br/>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;



