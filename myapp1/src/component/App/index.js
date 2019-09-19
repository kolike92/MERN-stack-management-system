import React from 'react';
import {connect} from 'react-redux';
import {getAllUsers} from '../../redux/action_creators';
import '../../index.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Create from '../Create'
import Edit from '../Edit'
import Home from'./home'
export class App extends React.Component {
  
    render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/cUser" component={Create} />
              <Route path="/eUser/:id" component={Edit} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

