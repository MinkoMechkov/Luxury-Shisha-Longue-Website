import { motion } from 'motion/react';
import { Calendar, Music, PartyPopper, Users } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: 'DJ Nights',
      day: 'Every Friday',
      time: '10 PM - 2 AM',
      description: 'Live DJ sets featuring the hottest tracks and remixes',
      icon: Music,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-900/20 to-pink-900/20'
    },
    {
      title: 'Ladies Night',
      day: 'Every Wednesday',
      time: '8 PM - 12 AM',
      description: 'Special offers and complimentary drinks for ladies',
      icon: PartyPopper,
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-900/20 to-rose-900/20'
    },
    {
      title: 'Open Mic',
      day: 'First Saturday',
      time: '9 PM - 1 AM',
      description: 'Showcase your talent with live performances',
      icon: Users,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-900/20 to-orange-900/20'
    },
    {
      title: 'VIP Experience',
      day: 'Weekend Special',
      time: 'All Night',
      description: 'Exclusive bottle service and private booth reservations',
      icon: Calendar,
      gradient: 'from-teal-500 to-emerald-500',
      bgGradient: 'from-teal-900/20 to-emerald-900/20'
    }
  ];

  return (
    <section id="events" className="py-24 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Events & Nights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us for unforgettable nights filled with music, culture, and connection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-gradient-to-br ${event.bgGradient} to-black border border-purple-500/20 rounded-3xl p-8 overflow-hidden group cursor-pointer`}
              >
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Date Badge */}
                <div className={`absolute top-6 right-6 bg-gradient-to-r ${event.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {event.day}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3">{event.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{event.time}</span>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {event.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`h-1 w-0 bg-gradient-to-r ${event.gradient} group-hover:w-full transition-all duration-500 mt-6 rounded-full`}></div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-900/30 to-amber-900/30 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to host a private event?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Our lounge is perfect for birthdays, corporate events, and special celebrations. 
              Contact us for custom packages.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
