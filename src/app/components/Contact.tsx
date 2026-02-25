import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Nightlife Avenue, Downtown District',
      subContent: 'City Center, 10001'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subContent: 'Available 6 PM - 2 AM'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@mystiquelounge.com',
      subContent: 'reservations@mystiquelounge.com'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-black">
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
              Get in Touch
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-6 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-purple-500/0 group-hover:from-amber-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 mb-1">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.subContent}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-teal-500/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-xl flex items-center justify-center hover:from-amber-500/30 hover:to-purple-500/30 transition-all group"
                      >
                        <Icon className="w-6 h-6 text-purple-400 group-hover:text-amber-400 transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-3xl p-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-purple-500/5 rounded-3xl"></div>
            
            {/* Map Placeholder - In production, replace with actual map */}
            <div className="relative z-10 h-full min-h-[400px] bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1767346439880-e8051dd2e935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbG91bmdlJTIwYXRtb3NwaGVyZSUyMG5pZ2h0fGVufDF8fHx8MTc3MDMxOTE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Location"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="relative z-10 text-center p-8">
                <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-1">123 Nightlife Avenue</p>
                <p className="text-gray-300 mb-4">Downtown District, City Center</p>
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/30">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
