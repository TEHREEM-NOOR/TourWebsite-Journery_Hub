import "../styles/heroStyles.css"
function Hero() {
  return (
    <>
        <div className="hero">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1170&auto=format&fit=crop"
        alt="Hero"
      />
    </div>

            <div className="hero-container">
            <h1>Your Journey Your Story </h1>
            <p>Choose your Favorite Destination</p>
            <button> Travel Plan</button>
        </div>
    
    
    </>

    
  );
}

export default Hero;