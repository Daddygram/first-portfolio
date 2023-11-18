import './App.css';
import './mediaqueries.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hamburger />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
