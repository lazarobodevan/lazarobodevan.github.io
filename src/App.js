import Home from "./sections/home/Home";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import "./index.css";
import Technologies from "./sections/technologies/Technologies";
import Projects from "./sections/projects/Projects";
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
      </main>
    </>
  );
}

export default App;
