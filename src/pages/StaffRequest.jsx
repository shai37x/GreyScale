import React, { useState } from "react";
import "../components/css/StaffRequest.css"; // Import CSS file for styling

const BookingData = [
  {
    id: 1,
    user: "Athul",
    startDate: "2025-03-01",
    endDate: "2025-03-05",
    address: "Kochi, Kerala",
    paymentStatus: "Paid",
    status: "Confirmed",
    amount: "₹5000",
    contractAmount: "₹5000",
    staffAccepted: true,
    userConfirmed: true,
    staffMessage: "Payment completed, booking confirmed!",
    staffId: "5",
    staffName: "Rajesh Kumar",
  },
  {
    id: 2,
    user: "Athul",
    startDate: "2025-04-10",
    endDate: "2025-04-12",
    address: "Dubai, UAE",
    paymentStatus: "Pending",
    status: "Pending",
    amount: "AED 800",
    contractAmount: "₹8000",
    staffAccepted: false,
    userConfirmed: false,
    staffMessage: "",
    staffId: "1",
    staffName: "John Doe",
  },
];

const StaffRequestPage = () => {
  const [bookings, setBookings] = useState(BookingData);

  const handleConfirm = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? { ...booking, staffAccepted: true, status: "Confirmed", staffMessage: "Request Confirmed by Staff" }
        : booking
    );
    setBookings(updatedBookings);
    alert("Booking confirmed successfully!");
  };

  return (
    <div className="request-container">
      <h2>Staff Booking Requests</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Address</th>
            <th>Payment Status</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Staff Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.user}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.address}</td>
              <td>{booking.paymentStatus}</td>
              <td>{booking.amount}</td>
              <td>{booking.status}</td>
              <td>{booking.staffMessage || "N/A"}</td>
              <td>
                {!booking.staffAccepted ? (
                  <button onClick={() => handleConfirm(booking.id)}>Confirm</button>
                ) : (
                  <span>Confirmed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffRequestPage;
