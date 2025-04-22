import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Book Bus Tickets with Ease
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Find the perfect bus for your journey. Fast, convenient, and affordable.
              </p>
              
              <div className="bg-white rounded-lg shadow-lg p-4">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose BusGo?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Fast & Convenient</h3>
                <p className="text-gray-600">
                  Book your bus tickets in minutes with our simple booking process.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Safe & Secure</h3>
                <p className="text-gray-600">
                  Your bookings and payment information are always secure with us.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">No Hidden Charges</h3>
                <p className="text-gray-600">
                  Transparent pricing with no hidden fees or extra charges.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Routes */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Popular Bus Routes</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { from: 'Mumbai', to: 'Pune', price: 600 },
                { from: 'Delhi', to: 'Jaipur', price: 850 },
                { from: 'Bangalore', to: 'Chennai', price: 750 },
                { from: 'Mumbai', to: 'Goa', price: 1200 },
                { from: 'Hyderabad', to: 'Bangalore', price: 950 },
                { from: 'Delhi', to: 'Shimla', price: 1100 }
              ].map((route, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-medium text-gray-800">{route.from} to {route.to}</h3>
                      <p className="text-sm text-gray-500">Starting from</p>
                    </div>
                    <div className="text-xl font-bold text-blue-500">₹{route.price}</div>
                  </div>
                  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-2 transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
