import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchResult from './SearchResult';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:term" component={SearchResult} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
