import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;