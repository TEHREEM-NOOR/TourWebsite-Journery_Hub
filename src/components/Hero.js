import "../styles/heroStyles.css";

function Hero({ title, subtitle, showButton, image }) {
  return (
    <div className={showButton ? "hero" : "hero hero-banner"}>
      <img
        className="hero-image"
        src={
          image ||
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200"
        }
        alt="Hero"
      />

      <div className="hero-container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {showButton && <button>Travel Plan</button>}
      </div>
    </div>
  );
}

export default Hero;