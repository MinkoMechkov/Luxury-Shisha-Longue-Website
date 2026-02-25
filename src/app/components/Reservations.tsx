import { motion } from 'motion/react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';

export function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Reservation request submitted! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservations" className="py-24 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
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
              Reserve Your Table
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Book your spot for an unforgettable evening at Mystique Lounge
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-3xl p-8 md:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-purple-500/5 rounded-3xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none z-10" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-purple-500/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none z-10" />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-purple-500/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-purple-500/30 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-purple-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Confirm Reservation
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Opening Hours */}
            <div className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-3xl p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-amber-400" />
                  Opening Hours
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="text-amber-400 font-semibold">6 PM - 2 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="text-amber-400 font-semibold">6 PM - 4 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-amber-400 font-semibold">7 PM - 1 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Info */}
            <div className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-3xl p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Important Information</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mt-2"></span>
                    <span>Reservations are recommended, especially on weekends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                    <span>Dress code: Smart casual (no sportswear)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                    <span>Minimum age: 21+ (Valid ID required)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mt-2"></span>
                    <span>Large group bookings (8+) require advance notice</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
