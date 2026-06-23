import "../styles/TripStyles.css";
import TripData from "./TripData";

const trips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600",
    title: "Hunza & Naltar Adventure",
    desc: "5 days exploring Hunza Valley, Attabad Lake, and Naltar's pine forests.",
    price: "Rs. 35,000",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604676055604-fe96097e4f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2thcmR1fGVufDB8MHwwfHx8MA%3D%3D",
    title: "Skardu & Deosai Plains",
    desc: "6 days covering Shangrila Resort, Satpara Lake, and the Deosai National Park.",
    price: "Rs. 45,000",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600",
    title: "Swat & Kalam Tour",
    desc: "4 days through Malam Jabba, Kalam, and the Swat River valley.",
    price: "Rs. 25,000",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600",
    title: "Naran & Saif-ul-Malook",
    desc: "3 days visiting Naran's lush valleys and the legendary Saif-ul-Malook Lake.",
    price: "Rs. 20,000",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600",
    title: "Lahore Heritage Walk",
    desc: "2 days exploring Badshahi Mosque, Lahore Fort, and the old walled city.",
    price: "Rs. 12,000",
  },
  {
    id: 6,
    image: "https://plus.unsplash.com/premium_photo-1711217237364-827b31b57e92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhZG93c3xlbnwwfDB8MHx8fDA%3D",
    title: "Fairy Meadows Trek",
    desc: "4 days trekking to Fairy Meadows with stunning views of Nanga Parbat.",
    price: "Rs. 40,000",
  },
];
function Trip() {
  return (
    <div className="trip">
      <h1>Best Trips</h1>
      <div className="t-cards">
        {trips.map((trip) => (
          <TripData
            key={trip.id}
            image={trip.image}
            title={trip.title}
            desc={trip.desc}
            price={trip.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Trip;