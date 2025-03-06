import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import AboutPage from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
     <Footer/>
    </Router>
    </div>
  );
}

export default App;
