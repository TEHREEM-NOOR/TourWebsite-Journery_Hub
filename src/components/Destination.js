import "../styles/DestinationStyles.css";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p className="destination-subtitle">
        Tours give you the opportunity to see a lot, within a time frame.
      </p>

      {DestinationData.map((d, index) => (
        <div
          className={`destination-row ${
            index % 2 !== 0 ? "reverse" : ""
          }`}
          key={d.id}
        >
          <div className="destination-text">
            <h2>{d.title}</h2>
            <p>{d.desc}</p>
          </div>

          <div className="destination-images">
            <img src={d.img1} alt={d.title} className="img-main" />
            <img src={d.img2} alt={d.title} className="img-overlap" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Destination;