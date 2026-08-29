import "./App.css";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="app">

      {/* Full-screen Neuralverse */}
      <section className="hero-section">
        <Hero />
      </section>

      {/* Other sections */}
      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}

export default App;

