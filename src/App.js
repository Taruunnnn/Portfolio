import "./App.scss";
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Portfolio from './containers/Portfolio';
import Resume from './containers/Resume';
import Skills from './containers/Skills';
import Navbar from './components/navbar';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* particles js */}

      {
        renderParticleJsInHomePage && <Particles id="particles" options={particles} init={handleInit} />

      }

      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="App_main-page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
