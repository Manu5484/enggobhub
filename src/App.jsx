import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import AboutPage from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
     <Footer/>
    </Router>
    </div>
  );
}

export default App;
