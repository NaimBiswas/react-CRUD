import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home'

function App() {
   return (

      <Fragment>
         <div className="App">
            <Router>
               <Link to='/'></Link>
               <Route exact path='/' component={Home}></Route>
            </Router>
         </div>
      </Fragment>


   );
}

export default App;
