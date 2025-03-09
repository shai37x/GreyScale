import React, { useState } from "react";
import "../components/css/Booking.css";

const Booking = () => {
  const [activeBooking, setActiveBooking] = useState("greyscale");

  const [greyscaleBooking, setGreyscaleBooking] = useState({
    startDate: "",
    endDate: "",
    address: "",
    country: "",
  });

  const [customBooking, setCustomBooking] = useState({
    startDate: "",
    endDate: "",
    address: "",
    country: "",
    professional: "John Doe", // Dummy professional
  });

  const allowedCountries = ["Kerala", "UAE"];

  const handleChange = (event, bookingType) => {
    const { name, value } = event.target;
    if (bookingType === "greyscale") {
      setGreyscaleBooking({ ...greyscaleBooking, [name]: value });
    } else {
      setCustomBooking({ ...customBooking, [name]: value });
    }
  };

  const handleSubmit = (event, bookingType) => {
    event.preventDefault();
    const bookingData = bookingType === "greyscale" ? greyscaleBooking : customBooking;

    if (!allowedCountries.includes(bookingData.country)) {
      alert("Service is only available in Kerala & UAE.");
      return;
    }

    alert(`Booking Confirmed: ${bookingType.toUpperCase()}`);
    console.log("Booking Details:", bookingData);
  };

  return (
    <div className="booking-container">
      <div className="booking-toggle">
        <span
          className={activeBooking === "greyscale" ? "active" : ""}
          onClick={() => setActiveBooking("greyscale")}
        >
          Greyscale Professional
        </span>
        <span
          className={activeBooking === "custom" ? "active" : ""}
          onClick={() => setActiveBooking("custom")}
        >
          Custom Professional
        </span>
      </div>

      {activeBooking === "greyscale" ? (
        <div className="booking-card">
          <h4>Greyscale Professional</h4>
          <form onSubmit={(e) => handleSubmit(e, "greyscale")}>
            <label>Start Date:</label>
            <input type="date" name="startDate" className="form-control"
              value={greyscaleBooking.startDate}
              onChange={(e) => handleChange(e, "greyscale")}
              required
            />

            <label className="mt-2">End Date:</label>
            <input type="date" name="endDate" className="form-control"
              value={greyscaleBooking.endDate}
              onChange={(e) => handleChange(e, "greyscale")}
              required
            />

            <label className="mt-2">Address:</label>
            <input type="text" name="address" className="form-control"
              value={greyscaleBooking.address}
              onChange={(e) => handleChange(e, "greyscale")}
              required
            />

            <label className="mt-2">Country (Kerala / UAE Only):</label>
            <input type="text" name="country" className="form-control"
              value={greyscaleBooking.country}
              onChange={(e) => handleChange(e, "greyscale")}
              required
            />

            <button type="submit" className="btn btn-primary mt-3">
              Book Greyscale Professional
            </button>
          </form>
        </div>
      ) : (
        <div className="booking-card">
          <h4>Custom Professional</h4>
          <form onSubmit={(e) => handleSubmit(e, "custom")}>
            <label>Start Date:</label>
            <input type="date" name="startDate" className="form-control"
              value={customBooking.startDate}
              onChange={(e) => handleChange(e, "custom")}
              required
            />

            <label className="mt-2">End Date:</label>
            <input type="date" name="endDate" className="form-control"
              value={customBooking.endDate}
              onChange={(e) => handleChange(e, "custom")}
              required
            />

            <label className="mt-2">Address:</label>
            <input type="text" name="address" className="form-control"
              value={customBooking.address}
              onChange={(e) => handleChange(e, "custom")}
              required
            />

            <label className="mt-2">Country (Kerala / UAE Only):</label>
            <input type="text" name="country" className="form-control"
              value={customBooking.country}
              onChange={(e) => handleChange(e, "custom")}
              required
            />

            <label className="mt-2">Selected Professional:</label>
            <input type="text" className="form-control" value={customBooking.professional} disabled />

            <button type="submit" className="btn btn-success mt-3">
              Book Custom Professional
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Booking;
