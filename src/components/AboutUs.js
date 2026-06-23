import "../styles/AboutUsStyles.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Trippy</h1>
      <p>
        Trippy is Pakistan's leading travel company, dedicated to helping you
        explore the country's most breathtaking destinations — from the
        towering peaks of Hunza to the historic streets of Lahore.
      </p>
      <p>
        Founded with a passion for adventure, our team curates handpicked
        trips, trusted local guides, and seamless booking experiences so you
        can focus on making memories across Pakistan's north and beyond.
      </p>
      <div className="about-stats">
        <div>
          <h2>500+</h2>
          <p>Happy Travelers</p>
        </div>
        <div>
          <h2>30+</h2>
          <p>Destinations</p>
        </div>
        <div>
          <h2>10</h2>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;