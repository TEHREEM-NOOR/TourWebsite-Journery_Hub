import "../styles/TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <h4>{props.price}</h4>
    </div>
  );
}

export default TripData;