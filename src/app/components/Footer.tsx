import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-4"
            >
              MYSTIQUE LOUNGE
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience the perfect blend of luxury, culture, and relaxation in an atmosphere designed for the sophisticated.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-lg flex items-center justify-center hover:from-amber-500/30 hover:to-purple-500/30 transition-all group"
                >
                  <Icon className="w-5 h-5 text-purple-400 group-hover:text-amber-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-amber-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Opening Hours</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-amber-400">6 PM - 2 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-amber-400">6 PM - 4 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-amber-400">7 PM - 1 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Mystique Lounge. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-purple-400 fill-purple-400" /> for shisha lovers
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-teal-500"></div>
    </footer>
  );
}
