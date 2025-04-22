import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../contexts/BookingContext';
import { cities } from '../data/busesData';

const SearchForm = () => {
  const { search, setSearch } = useBooking();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearch(prev => ({ ...prev, [name]: value }));
  };
  
  const validateForm = () => {
    const errors = {};
    if (!search.from) errors.from = 'Please select a departure city';
    if (!search.to) errors.to = 'Please select a destination city';
    if (search.from === search.to) errors.to = 'Departure and destination cannot be the same';
    if (!search.date) errors.date = 'Please select a date';
    
    const selectedDate = new Date(search.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.date = 'Please select a future date';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      navigate('/buses');
    }
  };
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];
  
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Find Your Bus</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-white mb-2">From</label>
            <select
              id="from"
              name="from"
              value={search.from}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-lg border text-gray-800 ${formErrors.from ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-300`}
            >
              <option value="">Select departure city</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {formErrors.from && <p className="mt-2 text-sm text-red-500">{formErrors.from}</p>}
          </div>
          
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-white mb-2">To</label>
            <select
              id="to"
              name="to"
              value={search.to}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-lg border text-gray-800 ${formErrors.to ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-300`}
            >
              <option value="">Select destination city</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {formErrors.to && <p className="mt-2 text-sm text-red-500">{formErrors.to}</p>}
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-white mb-2">Date of Journey</label>
            <input
              type="date"
              id="date"
              name="date"
              value={search.date || defaultDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full p-3 rounded-lg border ${formErrors.date ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-300`}
            />
            {formErrors.date && <p className="mt-2 text-sm text-red-500">{formErrors.date}</p>}
          </div>
        </div>
        
        <div className="mt-8">
          <button type="submit" className="w-full bg-white text-blue-500 font-bold py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
            Search Buses
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
