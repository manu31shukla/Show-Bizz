import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = (showDetails) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    localStorage.setItem('userDetails', JSON.stringify(formData));
  };

  return (
    <div className="booking-form-container">
      {!isSubmitted && (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Book your ticket</h2>
          <h3>{showDetails.name}</h3>
          <p>{showDetails.language}</p>
          <p>{showDetails.genre}</p>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            required
          />
          <button type="submit">Book Now</button>
        </form>
      )}
      {isSubmitted && (
        <div className="booking-confirmation">
          <h2>Your ticket has been booked!</h2>
          <p>Thank you for booking with us.</p>
          <p>Show: {showDetails.name}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
