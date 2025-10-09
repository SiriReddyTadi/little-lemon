import { useState } from "react";

const BookingForm = ({ setBookingData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    if (formData.guests < 1 || formData.guests > 10)
      newErrors.guests = "Guests must be between 1 and 10";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setBookingData(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Email:</label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Date:</label>
      <input name="date" type="date" value={formData.date} onChange={handleChange} />
      {errors.date && <p className="error">{errors.date}</p>}

      <label>Time:</label>
      <select name="time" value={formData.time} onChange={handleChange}>
        <option value="">Select time</option>
        {times.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {errors.time && <p className="error">{errors.time}</p>}

      <label>Number of Guests:</label>
      <input
        type="number"
        name="guests"
        value={formData.guests}
        min="1"
        max="10"
        onChange={handleChange}
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      <label>Occasion (optional):</label>
      <input name="occasion" value={formData.occasion} onChange={handleChange} />

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
