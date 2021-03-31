import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../src/view/home';
import Dashboard from '../src/view/dashboard';
import {Provider} from 'react-redux';
import store from './store';
import HomeIcon from '@material-ui/icons/Home';
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <Router>
        <div>
          <div className="title">
            <h2 className="title-heading">CMOM Technical Test <span className="home-icon"><Link to={'/'}><HomeIcon color="secondary" /></Link></span></h2>            
          </div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/data' component={Dashboard} />              
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;