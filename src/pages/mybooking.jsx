import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useBooking } from '../contexts/BookingContext';

const MyBooking = () => {
  const { selectedBus, selectedSeats, passengerDetails, totalAmount } = useBooking();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Booking</h1>
        {selectedBus && selectedSeats.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
            <div className="mb-4">
              <p><strong>Bus:</strong> {selectedBus.name} ({selectedBus.type})</p>
              <p><strong>From:</strong> {selectedBus.from}</p>
              <p><strong>To:</strong> {selectedBus.to}</p>
              <p><strong>Departure:</strong> {selectedBus.departure}</p>
              <p><strong>Arrival:</strong> {selectedBus.arrival}</p>
            </div>
            <div className="mb-4">
              <p><strong>Passenger Name:</strong> {passengerDetails.name}</p>
              <p><strong>Email:</strong> {passengerDetails.email}</p>
              <p><strong>Phone:</strong> {passengerDetails.phone}</p>
            </div>
            <div className="mb-4">
              <p><strong>Selected Seats:</strong> {selectedSeats.map(seat => {
                const [row, col] = seat.split('-');
                return `${+row + 1}${String.fromCharCode(65 + +col)}`;
              }).join(', ')}</p>
              <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No bookings found. Please make a booking first.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyBooking;
