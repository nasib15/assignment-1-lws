import About from "./components/About";
import Clients from "./components/Clients";
import CTASection from "./components/CTASection";
import Faq from "./components/Faq";
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
    </>
  );
}

export default App;
