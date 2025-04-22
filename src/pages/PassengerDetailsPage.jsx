import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useBooking } from '../contexts/BookingContext';

const PassengerDetailsPage = () => {
  const { passengerDetails, setPassengerDetails, selectedSeats } = useBooking();
  const [form, setForm] = useState(passengerDetails);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  if (!selectedSeats || selectedSeats.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">No seats selected</h2>
        <button onClick={() => navigate('/buses')} className="btn btn-primary mt-4">Back to Buses</button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    if (!form.phone) errs.phone = 'Phone is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setPassengerDetails(form);
      navigate('/booking-summary');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6">Passenger Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input-field w-full"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input-field w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="input-field w-full"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">Continue</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PassengerDetailsPage;
