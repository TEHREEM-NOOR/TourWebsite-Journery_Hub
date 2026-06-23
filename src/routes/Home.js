import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero
        title="Your Journey Your Story"
        subtitle="Choose your Favorite Destination"
        showButton={true}
        image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;