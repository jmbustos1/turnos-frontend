import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Table04Page from './Table04Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/table-04" element={<Table04Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
