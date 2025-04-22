import Header from '../components/Header';
import Footer from '../components/Footer';
import BusList from '../components/BusList';

const BusListPage = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      <BusList />
    </main>
    <Footer />
  </div>
);

export default BusListPage;
