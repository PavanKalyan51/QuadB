// MovieTicketForm.js
import React, { useState } from 'react';

const MovieTicketForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    // ...

    // Close the form
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Movie Ticket Booking</h2>
        <form className='bg-black ' onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Movie:
            <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} />
          </label>
          <label>
            Number of Tickets:
            <input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} />
          </label>
          <button type="submit">Book</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieTicketForm;
