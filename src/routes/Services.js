import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Hero
        title="Service"
        showButton={false}
        image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Services;