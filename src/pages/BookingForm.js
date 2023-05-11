import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ showId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save user details in localStorage
    localStorage.setItem(`show${showId}_name`, name);
    localStorage.setItem(`show${showId}_email`, email);
    localStorage.setItem(`show${showId}_phone`, phone);

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
  }

  return (
    <div className="booking-form-container">
      <h2>Book Ticket for Show {showId}</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => { setName(event.target.value) }} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(event) => { setPhone(event.target.value) }} required />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default BookingForm;
