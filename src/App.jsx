import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './contexts/BookingContext';
import HomePage from './pages/HomePage';
import BusListPage from './pages/BusListPage';
import BusDetailsPage from './pages/BusDetailsPage';
import PassengerDetailsPage from './pages/PassengerDetailsPage';
import BookingSummaryPage from './pages/BookingSummaryPage';
import MyBooking from './pages/mybooking';
import Contact from './pages/contact';
import LoginSignup from './pages/loginSignup';

function App() {
  return (
    <BookingProvider>
      <Router>
        {/* Header component can be added here if needed */}
        {/* <Header /> */}
        
        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buses" element={<BusListPage />} />
          <Route path="/bus/:id" element={<BusDetailsPage />} />
          <Route path="/passenger-details" element={<PassengerDetailsPage />} />
          <Route path="/booking-summary" element={<BookingSummaryPage />} />
          <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
