import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import CTASection from "./components/CTASection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainFeatures from "./components/MainFeatures";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainFeatures />
      <Properties />
      <About />
      <CTASection />
      <Faq />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
