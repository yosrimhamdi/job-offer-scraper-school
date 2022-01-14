import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SearchResult from './SearchResult';
import Home from './Home/Home';
import Header from './Header';
import Spinner from './Spinner';

const App = () => {
  return (
    <Router>
      <Spinner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:term" element={<SearchResult />} />
      </Routes>
    </Router>
  );
};

export default App;
