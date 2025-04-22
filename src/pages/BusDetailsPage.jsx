import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SeatSelector from '../components/SeatSelector';
import { busesData } from '../data/busesData';
import { useBooking } from '../contexts/BookingContext';

const BusDetailsPage = () => {
  const { id } = useParams();
  const bus = busesData.find(b => b.id === Number(id));
  const { setSelectedBus } = useBooking();
  const navigate = useNavigate();

  if (!bus) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">Bus not found</h2>
        <button onClick={() => navigate('/buses')} className="btn btn-primary mt-4">Back to List</button>
      </div>
    );
  }

  // Set selected bus in context
  setSelectedBus(bus);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <SeatSelector bus={bus} />
      </main>
      <Footer />
    </div>
  );
};

export default BusDetailsPage;
