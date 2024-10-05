import About from "./components/About";
import CTASection from "./components/CTASection";
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
    </>
  );
}

export default App;
