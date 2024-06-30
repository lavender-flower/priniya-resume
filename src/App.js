import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Aboutme from './pages/Aboutme/Aboutme';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className='App' >
    
     <Router>
      <Header></Header>
      <Routes>
  <Route path="/" element={<Aboutme />} />
  <Route path="/aboutme" element={<Aboutme />} />
  <Route path="/education" element={<Education />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/contact" element={<Contact />} />

</Routes>


      </Router>

    </div>
  );
}

export default App;
