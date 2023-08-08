import React, { useState } from 'react';

function MovieTicketBookingForm() {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [showtime, setShowtime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission
    console.log('Form submitted:', { name, movie, numTickets, showtime });
  };

  return (
    <div className='bg-[#464859] w-[400px] mx-auto mt-[100px] p-10'>
      <h2 className='text-white text-center font-bold text-lg'>Movie Ticket Booking Form</h2>
      <form onSubmit={handleSubmit} className='p-10'>
        <div>
          <label className='text-white pb-5'>Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className='text-white'>Movie:</label>
          <select value={movie} onChange={(e) => setMovie(e.target.value)} required>
            <option value="">Select a movie</option>
            <option value="Movie 1">Bhola Shankar</option>
            <option value="Movie 2">Bro</option>
            <option value="Movie 3">Jailer</option>
            <option value="Movie 3">Meg 2: The Trench</option>
            <option value="Movie 3">Rocky Aur Rani Kii Prem Kahaani</option>
            {/* Add more movie options here */}
          </select>
        </div>
        <div>
          <label className='text-white'>Number of Tickets:</label>
          <input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} min={1} required />
        </div>
        <div>
          <label className='text-white'>Showtime:</label>
          <input type="datetime-local" value={showtime} onChange={(e) => setShowtime(e.target.value)} required />
        </div>
        <div>
          <button type="submit"className='bg-white mt-5 p-1 rounded-md hover:bg-[#f84464] hover:text-white' >Book Tickets</button>
        </div>
      </form>
    </div>
  );
}

export default MovieTicketBookingForm;
