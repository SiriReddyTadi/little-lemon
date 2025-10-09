// src/App.jsx
import { useState } from "react";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import "./styles/App.css";
import foodImage from "./assets/Food.png";
import logoImage from "./assets/logo.png"; // <-- NEW IMPORT

function App() {
  const [bookingData, setBookingData] = useState(null);

  return (
    <div className="app-container">
      
      {/* NEW LOGO IMAGE ADDED HERE */}
      <img src={logoImage} alt="Little Lemon Logo" className="site-logo" /> 
      
      <h1 className="main-header">Little Lemon Restaurant</h1>
      
      <img src={foodImage} alt="Delicious Little Lemon Food" className="food-image" /> 

      {!bookingData ? (
        <BookingPage setBookingData={setBookingData} />
      ) : (
        <ConfirmedBooking bookingData={bookingData} />
      )}
    </div>
  );
}

export default App;