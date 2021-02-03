import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home'
import { UserProvider } from './components/UserContext/UserContext';
import Delete from './components/Delete';


function App() {
   return (
      <Fragment>
         <UserProvider>
            <div className="App">
               <Router>

                  <Link to='/'></Link>
                  <Route path='/delete/:id' component={Delete}></Route>
                  <Route exact path='/' component={Home}></Route>
               </Router>
            </div>
         </UserProvider>
      </Fragment>


   );
}

export default App;
