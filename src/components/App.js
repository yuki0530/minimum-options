import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../scss/App.scss';
import station from './station';
import genre from './genre';
import feeling from './feeling'
import error from './error';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={station} />
          <Route path="/genre" component={genre} />
          <Route path="/feeling" component={feeling} />
          <Route component={error} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;