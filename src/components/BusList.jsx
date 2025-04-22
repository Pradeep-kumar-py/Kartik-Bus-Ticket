import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../contexts/BookingContext';
import { busesData } from '../data/busesData';

const BusList = () => {
  const { search } = useBooking();
  const [buses, setBuses] = useState([]);
  const [sortBy, setSortBy] = useState('departure');
  const [filters, setFilters] = useState({
    busType: 'all',
    priceRange: [0, 2000],
    departureTime: 'all',
  });
  
  // Fetch buses based on search criteria
  useEffect(() => {
    // In a real app, this would be an API call
    // Here we're just filtering the dummy data
    const filteredBuses = busesData.filter(bus => {
      return (
        (!search.from || bus.from.toLowerCase() === search.from.toLowerCase()) &&
        (!search.to || bus.to.toLowerCase() === search.to.toLowerCase())
      );
    });
    
    setBuses(filteredBuses);
  }, [search]);
  
  // Sort buses
  const sortedBuses = [...buses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'duration':
        return a.duration.localeCompare(b.duration);
      case 'departure':
        return a.departure.localeCompare(b.departure);
      case 'seats':
        return b.availableSeats - a.availableSeats;
      default:
        return 0;
    }
  });
  
  // Apply filters
  const filteredBuses = sortedBuses.filter(bus => {
    return (
      (filters.busType === 'all' || bus.type.includes(filters.busType)) &&
      (bus.price >= filters.priceRange[0] && bus.price <= filters.priceRange[1]) &&
      (filters.departureTime === 'all' || 
        (filters.departureTime === 'morning' && bus.departure.includes('AM')) ||
        (filters.departureTime === 'evening' && bus.departure.includes('PM')))
    );
  });
  
  if (buses.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-700">No buses found for your search</h2>
        <p className="text-gray-500 mt-2">Try changing your search parameters</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{filteredBuses.length} Buses Found</h2>
            <p className="text-sm text-gray-500">
              {search.from} to {search.to} on {search.date}
            </p>
          </div>
          
          <div className="flex gap-4 items-center">
            <label className="text-sm font-medium">Sort By:</label>
            <select 
              className="border rounded px-3 py-1"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="departure">Departure Time</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
              <option value="seats">Available Seats</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {filteredBuses.map(bus => (
          <div 
            key={bus.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 p-4">
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold">{bus.name}</h3>
                <div className="text-sm text-gray-500 mb-2">{bus.type}</div>
                
                <div className="flex gap-8 mt-4">
                  <div>
                    <div className="font-semibold">{bus.departure}</div>
                    <div className="text-sm text-gray-500">{bus.from}</div>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <div className="w-20 h-px bg-gray-300 relative">
                      <div className="absolute -top-2 text-xs w-full text-center">{bus.duration}</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div>
                    <div className="font-semibold">{bus.arrival}</div>
                    <div className="text-sm text-gray-500">{bus.to}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:border-l md:border-r md:px-4">
                <div className="text-sm text-gray-600 mb-1">Rating</div>
                <div className="flex items-center">
                  <span className="text-amber-500 font-semibold">{bus.rating}</span>
                  <div className="ml-1 text-amber-400">★</div>
                </div>
                
                <div className="text-sm text-gray-600 mt-3 mb-1">Amenities</div>
                <div className="flex flex-wrap gap-1">
                  {bus.amenities.map((amenity, index) => (
                    <span key={index} className="inline-block bg-gray-100 text-xs px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-2xl font-bold text-primary">₹{bus.price}</div>
                <div className="text-sm text-gray-500 mb-4">per seat</div>
                
                <div className="text-sm">
                  <span className="font-medium">{bus.availableSeats}</span> seats available
                </div>
                
                <Link
                  to={`/bus/${bus.id}`}
                  className="btn btn-primary inline-block mt-3"
                >
                  View Seats
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusList;
