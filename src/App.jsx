import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
