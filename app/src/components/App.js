import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SearchResult from './SearchResult';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:term" element={<SearchResult />} />
      </Routes>
    </Router>
  );
};

export default App;
