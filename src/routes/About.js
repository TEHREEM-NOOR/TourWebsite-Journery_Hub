import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Hero
        title="About"
        showButton={false}
        image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;