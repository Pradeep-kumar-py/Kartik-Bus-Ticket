import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingSummary from '../components/BookingSummary';

const BookingSummaryPage = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      <BookingSummary />
    </main>
    <Footer />
  </div>
);

export default BookingSummaryPage;
