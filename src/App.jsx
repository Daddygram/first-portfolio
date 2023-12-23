import './App.css';
import './mediaqueries.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import { createContext, useState } from 'react';
import Cursor from './components/Cursor';

export const ThemeContext = createContext(null)

function App() {

  const [Theme, setTheme] = useState("dark")

  const ToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{Theme, ToggleTheme}}>
      <div className='App dark' id={Theme}>
        <Navbar />
        <Hamburger />
        <Profile />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Cursor />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
