import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../contexts/BookingContext';

const BookingSummary = () => {
  const { selectedBus, selectedSeats, passengerDetails, totalAmount, bookTicket } = useBooking();
  const [isLoading, setIsLoading] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();
  
  if (!selectedBus || selectedSeats.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">No booking in progress</h2>
        <p className="mt-2 text-gray-600">Please select a bus and seats first</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 btn btn-primary"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  const handleBooking = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get booking confirmation
      const result = bookTicket();
      
      if (result.success) {
        setBookingComplete(true);
        setBookingDetails(result);
      }
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (bookingComplete && bookingDetails) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-lg font-semibold text-green-800">Booking Confirmed!</h2>
          </div>
          <p className="mt-2 text-green-700">Your booking has been confirmed. Booking ID: {bookingDetails.bookingId}</p>
        </div>
        
        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Passenger Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-gray-600">Name:</span>
              <p className="font-medium">{passengerDetails.name}</p>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <p className="font-medium">{passengerDetails.email}</p>
            </div>
            <div>
              <span className="text-gray-600">Phone:</span>
              <p className="font-medium">{passengerDetails.phone}</p>
            </div>
          </div>
        </div>
        
        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Journey Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-gray-600">Bus:</span>
              <p className="font-medium">{selectedBus.name} ({selectedBus.type})</p>
            </div>
            <div>
              <span className="text-gray-600">Date:</span>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <span className="text-gray-600">From:</span>
              <p className="font-medium">{selectedBus.from}</p>
            </div>
            <div>
              <span className="text-gray-600">To:</span>
              <p className="font-medium">{selectedBus.to}</p>
            </div>
            <div>
              <span className="text-gray-600">Departure:</span>
              <p className="font-medium">{selectedBus.departure}</p>
            </div>
            <div>
              <span className="text-gray-600">Arrival:</span>
              <p className="font-medium">{selectedBus.arrival}</p>
            </div>
          </div>
        </div>
        
        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Seat Details</h3>
          <div>
            <span className="text-gray-600">Selected Seats:</span>
            <p className="font-medium">
              {selectedSeats.map(seat => {
                const [row, col] = seat.split('-');
                return `${+row + 1}${String.fromCharCode(65 + +col)}`;
              }).join(', ')}
            </p>
          </div>
          <div className="mt-2">
            <span className="text-gray-600">Total Seats:</span>
            <p className="font-medium">{selectedSeats.length}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-600">Total Amount:</span>
            <p className="text-xl font-bold text-primary">₹{totalAmount}</p>
          </div>
          
          <div>
            <button 
              onClick={() => navigate('/')}
              className="btn btn-primary"
            >
              Book Another Ticket
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Review Your Booking</h2>
      
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Journey Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-gray-600">Bus:</span>
            <p className="font-medium">{selectedBus.name} ({selectedBus.type})</p>
          </div>
          <div>
            <span className="text-gray-600">Date:</span>
            <p className="font-medium">{new Date().toLocaleDateString()}</p>
          </div>
          <div>
            <span className="text-gray-600">From:</span>
            <p className="font-medium">{selectedBus.from}</p>
          </div>
          <div>
            <span className="text-gray-600">To:</span>
            <p className="font-medium">{selectedBus.to}</p>
          </div>
          <div>
            <span className="text-gray-600">Departure:</span>
            <p className="font-medium">{selectedBus.departure}</p>
          </div>
          <div>
            <span className="text-gray-600">Arrival:</span>
            <p className="font-medium">{selectedBus.arrival}</p>
          </div>
        </div>
      </div>
      
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Selected Seats</h3>
        <div className="flex flex-wrap gap-2">
          {selectedSeats.map(seat => {
            const [row, col] = seat.split('-');
            return (
              <div key={seat} className="bg-green-50 border border-green-200 rounded px-2 py-1">
                {+row + 1}{String.fromCharCode(65 + +col)}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Passenger Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-gray-600">Name:</span>
            <p className="font-medium">{passengerDetails.name}</p>
          </div>
          <div>
            <span className="text-gray-600">Email:</span>
            <p className="font-medium">{passengerDetails.email}</p>
          </div>
          <div>
            <span className="text-gray-600">Phone:</span>
            <p className="font-medium">{passengerDetails.phone}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-gray-600">Total Amount:</span>
          <p className="text-2xl font-bold text-primary">₹{totalAmount}</p>
          <span className="text-sm text-gray-500">
            ({selectedSeats.length} seats × ₹{selectedBus.price})
          </span>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/passenger-details')}
            className="btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button 
            onClick={handleBooking}
            className="btn btn-primary min-w-[120px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Confirm Booking'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
