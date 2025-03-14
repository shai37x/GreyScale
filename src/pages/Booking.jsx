import React, { useState, useEffect } from "react";
import "../components/css/Booking.css";
import BookingData from "../components/BookingData";
import Ddata from "../components/Ddata.json"; // Verify this path!

const Booking = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [photographers, setPhotographers] = useState([]); // Store available staff
  const [newBooking, setNewBooking] = useState({
    startDate: "",
    endDate: "",
    address: "",
    country: "",
    amount: "",
  });

  const allowedCountries = ["Kerala", "UAE"];

  useEffect(() => {
    setBookings(BookingData);
    setPhotographers(Ddata); // Load staff (photographers) from Ddata.json
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!allowedCountries.includes(newBooking.country)) {
      alert("Service is only available in Kerala & UAE.");
      return;
    }

    // Assign a random staff member
    const assignedPhotographer = photographers[Math.floor(Math.random() * photographers.length)];

    const newBookingEntry = {
      id: bookings.length + 1,
      user: "User",
      ...newBooking,
      paymentStatus: "Pending",
      status: "Pending",
      contractAmount: "",
      staffAccepted: false,
      userConfirmed: false,
      staffMessage: "",
      staffId: assignedPhotographer?.id || "N/A", // Added staffId
      staffName: assignedPhotographer?.name || "Not Assigned",
    };

    setBookings([...bookings, newBookingEntry]);
    setNewBooking({ startDate: "", endDate: "", address: "", country: "", amount: "" });
    setShowForm(false);
  };

  const handlePayment = (id) => {
    setBookings(
      bookings.map((b) =>
        b.id === id
          ? { ...b, paymentStatus: "Paid", status: "Confirmed", staffMessage: "Payment completed, booking confirmed!" }
          : b
      )
    );
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h2>My Bookings</h2>
        <button className="add-booking-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "×" : "New Booking"}
        </button>
      </div>

      {showForm && (
        <div className="booking-form">
          <form onSubmit={handleSubmit}>
            <label>Start Date:</label>
            <input type="date" name="startDate" value={newBooking.startDate} onChange={handleChange} required />

            <label>End Date:</label>
            <input type="date" name="endDate" value={newBooking.endDate} onChange={handleChange} required />

            <label>Address:</label>
            <input type="text" name="address" value={newBooking.address} onChange={handleChange} required />

            <label>Country (Kerala / UAE Only):</label>
            <input type="text" name="country" value={newBooking.country} onChange={handleChange} required />

            <button type="submit" className="submit-btn">Confirm Booking</button>
          </form>
        </div>
      )}

      <table className="booking-table">
        <thead>
          <tr>
            <th>From Date</th>
            <th>To Date</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Message</th>
            <th>Staff Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.address}</td>
              <td>{booking.amount}</td>
              <td className={booking.paymentStatus.toLowerCase()}>
                {booking.paymentStatus}
              </td>
              <td className={booking.status.toLowerCase()}>{booking.status}</td>
              <td>{booking.staffMessage}</td>
              <td>{booking.staffName}</td> {/* Displaying assigned staff */}
              <td>
                {booking.paymentStatus === "Pending" ? (
                  <button className="pay-btn" onClick={() => handlePayment(booking.id)}>
                    Pay Now
                  </button>
                ) : (
                  <p className="confirmed">Paid</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
