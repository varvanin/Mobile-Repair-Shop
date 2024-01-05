import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero-section/Hero";
import Card from "../../components/card-section/Card";
import About from "../../components/about-section/About";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <About />
    </div>
  );
}

export default Home;
