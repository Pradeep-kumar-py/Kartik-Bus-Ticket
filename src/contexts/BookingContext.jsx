import { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [search, setSearch] = useState({
    from: '',
    to: '',
    date: ''
  });
  
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const totalAmount = selectedBus ? selectedSeats.length * selectedBus.price : 0;
  
  const bookTicket = () => {
    // This would connect to a backend in a real app
    console.log("Booking ticket with details:", {
      bus: selectedBus,
      seats: selectedSeats,
      passenger: passengerDetails,
      totalAmount
    });
    
    // Clear state after booking
    return {
      success: true,
      bookingId: `BK${Math.floor(Math.random() * 10000)}`,
      timestamp: new Date().toISOString()
    };
  };
  
  const value = {
    search,
    setSearch,
    selectedBus,
    setSelectedBus,
    selectedSeats,
    setSelectedSeats,
    passengerDetails,
    setPassengerDetails,
    totalAmount,
    bookTicket
  };
  
  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
