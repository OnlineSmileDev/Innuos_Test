import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './views/main';
import Begin from './views/begin';

import './App.css';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Begin/>}/>
          <Route exact path="/main" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
