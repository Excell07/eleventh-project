import React, { Component } from 'react';
import PhotoContainer from './components/PhotoContainer';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import NoMatch from './components/NoMatch';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={SearchForm} />
          <Route component={Nav} />

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/people" /> } />
            <Route path="/people" render={() => <PhotoContainer tag="people" /> } />
            <Route path="/cars" render={() => <PhotoContainer tag="cars" /> } />
            <Route path="/dogs" render={() => <PhotoContainer tag="dogs" /> } />

            <Route path="/search/:tag" render={props => (<PhotoContainer tag={props.match.params.tag} />)} />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
