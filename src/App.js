import Home from "./sections/home/Home";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import "./index.css";
import Technologies from "./sections/technologies/Technologies";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY*1.2;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <Header activeSection={activeSection}/>
      <main className="content">
        <Home/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </main>
      <footer style={{textAlign:"center", fontFamily:"arial"}}>&#174; Lázaro Bodevan - 2024</footer>
    </>
  );
}

export default App;
