import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Movies from '@/pages/Movies';
import MovieDetails from '@/pages/MovieDetails';
import Bookings from '@/pages/Bookings';
import Contact from '@/pages/Contact';
import ComingSoon from '@/pages/ComingSoon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;