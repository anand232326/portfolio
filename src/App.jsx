import About from "./components/About";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
