import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../scss/App.scss';
import station from './station';
import genre from './genre';
import seat from './seat';
import payment from './payment';
import results from './results';
import error from './error';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={station} />
          <Route path="/genre" component={genre} />
          <Route path="/seat" component={seat} />
          <Route path="/payment" component={payment} />
          <Route path="/results" component={results} />
          <Route component={error} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;