import { useState, useEffect } from "react";
import "../styles/PCBooking.css";

const PCBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "18:00",
    duration: 1,
    tier: "standard"
  });

  const [totalCost, setTotalCost] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tierPrices = {
    standard: 5,
    vip: 10,
    streamer: 15
  };

  useEffect(() => {
    const cost = formData.duration * tierPrices[formData.tier];
    setTotalCost(cost);
  }, [formData.duration, formData.tier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "duration" ? parseInt(value, 10) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="booking-container animate-fade-in">
        <div className="glass-panel success-panel">
          <h2>Booking <span className="title-highlight">Confirmed!</span></h2>
          <p>Your {formData.tier.toUpperCase()} station is reserved for {formData.duration} hour(s) on {formData.date} at {formData.time}.</p>
          <button className="btn-primary" onClick={() => setIsSubmitted(false)}>Book Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-container animate-fade-in">
      <div className="glass-panel booking-panel">
        <h2>Reserve Your <span className="title-highlight">Station</span></h2>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Gamer Tag or Name" />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="date" required value={formData.date} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label>Start Time</label>
              <select name="time" value={formData.time} onChange={handleChange}>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Duration (Hours)</label>
              <input type="number" name="duration" min="1" max="12" required value={formData.duration} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label>PC Tier</label>
              <select name="tier" value={formData.tier} onChange={handleChange}>
                <option value="standard">Standard PC ($5/hr)</option>
                <option value="vip">VIP Gaming Rig ($10/hr)</option>
                <option value="streamer">Streamer Pod ($15/hr)</option>
              </select>
            </div>
          </div>
          
          <div className="cost-calculator">
            <h3>Estimated Cost: <span className="title-highlight">${totalCost}</span></h3>
          </div>
          
          <button type="submit" className="btn-primary w-full">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default PCBookingForm;
