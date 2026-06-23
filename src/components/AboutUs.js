import "../styles/AboutUsStyles.css";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-section">
        <h2>Our History</h2>
        <p>
          Trippy started as a small group of travel enthusiasts passionate
          about showing the world the breathtaking beauty of Pakistan's
          north. What began as weekend trips to Hunza and Skardu grew into
          a full travel company trusted by hundreds of explorers, offering
          curated tours, reliable guides, and unforgettable experiences
          across the country.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make travel across Pakistan simple, safe, and
          affordable for everyone — from first-time trekkers to seasoned
          adventurers. We aim to connect travelers with authentic local
          culture, trusted guides, and destinations that leave a lasting
          impression.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Goals</h2>
        <p>
          We're working toward expanding our tours to cover every region of
          Pakistan, partnering with local communities to promote sustainable
          tourism, and building a platform where travelers can plan, book,
          and share their journeys all in one place.
        </p>
      </div>

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