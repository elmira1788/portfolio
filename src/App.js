import './App.css';
import Navbar from './components/Navbar';

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Social from './components/Social'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
  return (
  
    <div className='app'>
    {/* <BrowserRouter>
      <Navbar />  
      <Routes>
      
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        
        </Routes>
      </BrowserRouter> */}
    
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Social />
      <Footer />
    </div>
    
  );
}

export default App;
