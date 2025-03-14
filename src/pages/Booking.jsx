import React, { useState } from "react";
import "../components/css/Booking.css";
import AdminBooking from "./AdminBooking";

const Booking = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookings, setBookings] = useState([
    { id: 1, startDate: "2025-03-01", endDate: "2025-03-05", address: "Kochi, Kerala", paymentStatus: "Paid", status: "Confirmed", amount: "₹5000", contractAmount: "₹5000", userConfirmed: true },
    { id: 2, startDate: "2025-04-10", endDate: "2025-04-12", address: "Dubai, UAE", paymentStatus: "Pending", status: "Confirmed", amount: "AED 800", contractAmount: "₹8000", userConfirmed: false },
  ]);
  const userRole=localStorage.getItem("role")
  const [newBooking, setNewBooking] = useState({
    startDate: "",
    endDate: "",
    address: "",
    country: "",
  });

  const allowedCountries = ["Kerala", "UAE"];

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
    const newBookingEntry = {
      id: bookings.length + 1,
      ...newBooking,
      paymentStatus: "Pending",
      status: "Pending",
      amount: "TBD",
      contractAmount: "",
      userConfirmed: false,
    };
    setBookings([...bookings, newBookingEntry]);
    setNewBooking({ startDate: "", endDate: "", address: "", country: "" });
    setShowForm(false);
  };

  const handleContractAmountChange = (id, value) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, contractAmount: value } : b)));
  };

  const handleUserConfirmation = (id, isAccepted) => {
    setBookings(
      bookings.map((b) =>
        b.id === id
          ? {
              ...b,
              status: isAccepted ? "Confirmed" : "Declined",
              userConfirmed: isAccepted,
              amount: isAccepted ? b.contractAmount : "N/A",
            }
          : b
      )
    );
  };

  return (
     userRole === "user"?(

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
            <th>Payment</th>
            <th>Status</th>
            <th>Contract Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.address}</td>
              <td className={booking.paymentStatus.toLowerCase()}>{booking.paymentStatus}</td>
              <td className={booking.status.toLowerCase()}>{booking.status}</td>
              <td>
                {booking.userConfirmed ? (
                  booking.contractAmount
                ) : (
                  <input
                    type="text"
                    value={booking.contractAmount}
                    onChange={(e) => handleContractAmountChange(booking.id, e.target.value)}
                  />
                )}
              </td>
              <td>
                {!booking.userConfirmed ? (
                  <>
                    <button className="accept-btn decession-btn" onClick={() => handleUserConfirmation(booking.id, true)}>
                      Accept
                    </button>
                    <button className="reject-btn decession-btn" onClick={() => handleUserConfirmation(booking.id, false)}>
                      Reject
                    </button>
                  </>
                ): (<p className="confirmed">Confirmed</p>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>): userRole=="admin"?(<div><AdminBooking /></div>):(<div></div>)
  );
};

export default Booking;
