import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import heroShishaImage from '../assets/hero-shisha.jpg';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <img
          src={heroShishaImage}
          alt="Luxury lounge"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Smoke Effects */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${20 + i * 15}%`,
              width: '300px',
              height: '400px',
              background: `radial-gradient(circle at center, ${
                i % 2 === 0
                  ? 'rgba(217, 119, 6, 0.15)'
                  : 'rgba(168, 85, 247, 0.12)'
              } 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
            initial={{
              y: window.innerHeight + 100,
              opacity: 0,
              x: Math.random() * 100 - 50,
            }}
            animate={{
              y: -300,
              opacity: [0, 0.6, 0.4, 0],
              x: Math.sin(i) * 150 + (Math.random() * 100 - 50),
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20 rounded-full px-3 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-8"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
          <span className="text-amber-400 text-xs sm:text-sm tracking-wider">PREMIUM EXPERIENCE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight"
        >
          <span className="block text-white">Where Flavor</span>
          <span className="block bg-gradient-to-r from-amber-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Meets Atmosphere
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2"
        >
          Experience the perfect blend of luxury, culture, and relaxation in the heart of the city
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <button
            onClick={() => scrollToSection('#reservations')}
            className="group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs sm:text-sm md:text-base rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50"
          >
            <span className="relative z-10">Reserve a Table</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button
            onClick={() => scrollToSection('#menu')}
            className="group px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-transparent border-2 border-purple-500/50 text-white font-semibold text-xs sm:text-sm md:text-base rounded-full transition-all hover:scale-105 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  );
}
