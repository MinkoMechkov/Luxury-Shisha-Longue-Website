import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Reservations } from './components/Reservations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Events />
      <Gallery />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  );
}
