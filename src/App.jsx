import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import About from './components/About';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Differentials />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
