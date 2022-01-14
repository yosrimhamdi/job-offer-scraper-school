import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchResult from './SearchResult';
import Home from './Home';
import Header from './Header';
import Spinner from './Spinner';

const App = () => {
  return (
    <Router>
      <Spinner />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:term" component={SearchResult} />
      </Switch>
    </Router>
  );
};

export default App;
