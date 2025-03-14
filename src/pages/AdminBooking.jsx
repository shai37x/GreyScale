import React from "react";
import "../components/css/AdminBooking.css"

const AdminBooking = () => {
  const bookings = [
    {
      id: 1,
      name:"athul",
      startDate: "2025-03-01",
      endDate: "2025-03-05",
      address: "Kochi, Kerala",
      paymentStatus: "Paid",
      status: "Confirmed",
      amount: "₹5000",
      contractAmount: "₹5000",
      userConfirmed: true,
    },
    {
      id: 2,
      name:"athul",
      startDate: "2025-04-10",
      endDate: "2025-04-12",
      address: "Dubai, UAE",
      paymentStatus: "Pending",
      status: "Confirmed",
      amount: "₹8000",
      contractAmount: "₹8000",
      userConfirmed: false,
    },
  ];

  return (
    <div className="booking-status-container">
      <h2>Booking Status</h2>
      <table className="booking-status-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Address</th>
            <th>Payment</th>
            <th>Staff Confirmation</th>
            <th>Amount</th>
            <th>Contract Amount</th>
            <th>User Confirmation</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
                <td>{booking.name}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.address}</td>
              <td className={booking.paymentStatus.toLowerCase()}>{booking.paymentStatus}</td>
              <td className={booking.status.toLowerCase()}>{booking.status}</td>
              <td>{booking.amount}</td>
              <td>{booking.contractAmount}</td>
              <td>
                {booking.userConfirmed ? (
                  <span className="confirmed"> Confirmed</span>
                ) : (
                  <span className="pending"> Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBooking;
