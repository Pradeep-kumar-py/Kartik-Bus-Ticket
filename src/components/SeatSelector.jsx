import { useState, useEffect } from 'react';
import { useBooking } from '../contexts/BookingContext';
import { useNavigate } from 'react-router-dom';

const SeatSelector = ({ bus }) => {
  const { selectedSeats, setSelectedSeats } = useBooking();
  const navigate = useNavigate();
  const [seatLayout, setSeatLayout] = useState(bus?.seatLayout?.seats || []);
  const [error, setError] = useState('');
  
  // Reset selected seats when bus changes
  useEffect(() => {
    setSelectedSeats([]);
    if (bus?.seatLayout?.seats) {
      setSeatLayout(bus.seatLayout.seats);
    }
  }, [bus, setSelectedSeats]);
  
  if (!bus || !bus.seatLayout) {
    return <div>No seat layout available</div>;
  }
  
  const handleSeatClick = (rowIndex, colIndex) => {
    // Get current seat status
    const currentStatus = seatLayout[rowIndex][colIndex];
    
    // Can only select available seats (status 0)
    if (currentStatus !== 0) return;
    
    // Check if already selected by this user
    const seatId = `${rowIndex}-${colIndex}`;
    const isAlreadySelected = selectedSeats.includes(seatId);
    
    if (isAlreadySelected) {
      // Remove from selections
      setSelectedSeats(prev => prev.filter(id => id !== seatId));
      
      // Update local layout
      const newLayout = [...seatLayout];
      newLayout[rowIndex][colIndex] = 0; // Set back to available
      setSeatLayout(newLayout);
    } else {
      // Check max 5 seats per booking
      if (selectedSeats.length >= 5) {
        setError('You can select up to 5 seats only');
        return;
      }
      
      // Add to selections
      setSelectedSeats(prev => [...prev, seatId]);
      
      // Update local layout
      const newLayout = [...seatLayout];
      newLayout[rowIndex][colIndex] = 2; // Set to selected
      setSeatLayout(newLayout);
    }
    
    setError('');
  };
  
  const getSeatColor = (status) => {
    switch (status) {
      case 0: return 'bg-white border-green-500 text-green-800 hover:bg-green-50'; // Available
      case 1: return 'bg-gray-200 border-gray-400 text-gray-400 cursor-not-allowed'; // Booked
      case 2: return 'bg-green-500 border-green-700 text-white'; // Selected
      case 3: return 'bg-pink-100 border-pink-500 text-pink-800 cursor-not-allowed'; // Ladies
      case 4: return 'bg-gray-100 border-gray-300 text-gray-300 cursor-not-allowed'; // Unavailable
      default: return 'bg-white';
    }
  };
  
  const getSeatTooltip = (status) => {
    switch (status) {
      case 0: return 'Available';
      case 1: return 'Booked';
      case 2: return 'Selected';
      case 3: return 'Ladies Only';
      case 4: return 'Unavailable';
      default: return '';
    }
  };
  
  const handleContinue = () => {
    if (selectedSeats.length === 0) {
      setError('Please select at least one seat');
      return;
    }
    navigate('/passenger-details');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Select Your Seats</h2>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      <div className="flex items-center justify-center mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="w-6 h-6 border rounded mr-2 bg-white border-green-500"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 border rounded mr-2 bg-green-500 border-green-700"></div>
            <span className="text-sm">Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 border rounded mr-2 bg-gray-200 border-gray-400"></div>
            <span className="text-sm">Booked</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 border rounded mr-2 bg-pink-100 border-pink-500"></div>
            <span className="text-sm">Ladies Only</span>
          </div>
        </div>
      </div>
      
      <div className="bus-layout bg-gray-100 p-6 rounded-lg max-w-md mx-auto relative">
        {/* Driver seat */}
        <div className="absolute -top-4 left-4 transform -translate-y-full">
          <div className="bg-gray-300 w-10 h-10 rounded-t-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        {/* Bus entry */}
        <div className="absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2">
          <div className="bg-gray-300 h-16 w-3 rounded-r"></div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {seatLayout.map((row, rowIndex) => (
            row.map((seat, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                className={`seat w-10 h-10 border-2 rounded flex items-center justify-center font-medium ${getSeatColor(seat)}`}
                onClick={() => handleSeatClick(rowIndex, colIndex)}
                title={getSeatTooltip(seat)}
                disabled={seat === 1 || seat === 3 || seat === 4}
              >
                {rowIndex + 1}{String.fromCharCode(65 + colIndex)}
              </button>
            ))
          ))}
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Selected Seats</h3>
            <p className="text-sm text-gray-600">
              {selectedSeats.length > 0 ? 
                selectedSeats.map(seat => {
                  const [row, col] = seat.split('-');
                  return `${+row + 1}${String.fromCharCode(65 + +col)}`;
                }).join(', ') : 
                'No seats selected'
              }
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-600">Total Amount</div>
            <div className="text-xl font-bold text-primary">
              ₹{selectedSeats.length * bus.price}
            </div>
          </div>
        </div>
        
        <button 
          className="w-full mt-4 btn btn-primary"
          onClick={handleContinue}
          disabled={selectedSeats.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;
