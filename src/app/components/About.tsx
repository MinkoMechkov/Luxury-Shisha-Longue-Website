import { motion } from 'motion/react';
import { Wind, Music, Star, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Wind,
      title: 'Premium Shisha',
      description: 'Finest tobacco blends from around the world'
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Curated playlists and live DJ performances'
    },
    {
      icon: Star,
      title: 'Luxury Ambiance',
      description: 'Sophisticated decor with ambient lighting'
    },
    {
      icon: Users,
      title: 'VIP Lounges',
      description: 'Private spaces for an exclusive experience'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              The Lounge Experience
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            Step into a world where Middle Eastern tradition meets contemporary luxury. 
            Our lounge offers an unparalleled atmosphere designed for those who appreciate 
            the finer things in life.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden group"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Since opening our doors, Mystique Lounge has been the destination for discerning 
                guests seeking an authentic yet refined shisha experience. Our passionate team 
                curates every detail, from hand-selected tobacco blends to the perfect ambient 
                lighting.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you're celebrating a special occasion or simply unwinding after a long day, 
                our lounge provides the perfect backdrop for memorable moments.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1626274941806-3664ce9dee7e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lounge interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-6 group cursor-pointer"
            >
              {/* Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-purple-500/0 group-hover:from-amber-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
