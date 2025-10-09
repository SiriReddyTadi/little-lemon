const ConfirmedBooking = ({ bookingData }) => {
  return (
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p>Name: {bookingData.name}</p>
      <p>Email: {bookingData.email}</p>
      <p>Date: {bookingData.date}</p>
      <p>Time: {bookingData.time}</p>
      <p>Guests: {bookingData.guests}</p>
      {bookingData.occasion && <p>Occasion: {bookingData.occasion}</p>}
    </div>
  );
};

export default ConfirmedBooking;
