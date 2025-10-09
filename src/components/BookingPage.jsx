import BookingForm from "./BookingForm";

const BookingPage = ({ setBookingData }) => {
  return (
    <div className="page-container">
      <h1>Little Lemon Table Booking</h1>
      <p>Please fill the form below to reserve your table.</p>
      <BookingForm setBookingData={setBookingData} />
    </div>
  );
};

export default BookingPage;
