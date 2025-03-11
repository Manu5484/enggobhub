import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header
import Footer from './components/Footer';
import Login1 from './pages/Login1';
import Contact from './pages/Contact';
import {HashRouter as Router, Routes, Route,useLocation} from 'react-router-dom'
import './App.css';
import AboutPage from './pages/About';
import Footer from './components/Footer';


function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/login";
  return (
      <div>
        <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/login" element={<Login1 />} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<AboutPage/>}/>
          </Routes>

          {!hideFooter && <Footer />}
      </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/blog" element={<Blog/>}/>
//         <Route path="/login" element={<Login1/>}/>
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

export default function App() {
  return (

      <Router>
          <Layout />
      </Router>
  );
}

