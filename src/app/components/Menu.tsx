import { motion } from 'motion/react';
import { Flame, Leaf, Crown, Coffee, Wine, Utensils } from 'lucide-react';
import { useState } from 'react';

export function Menu() {
  const [activeTab, setActiveTab] = useState('shisha');

  const shishaMenu = {
    classic: [
      { name: 'Double Apple', description: 'Traditional red & green apple blend', price: '$25' },
      { name: 'Mint', description: 'Pure refreshing mint leaves', price: '$25' },
      { name: 'Grape', description: 'Sweet purple grape essence', price: '$25' },
      { name: 'Lemon Mint', description: 'Zesty citrus with cooling mint', price: '$28' }
    ],
    dark: [
      { name: 'Blue Mist', description: 'Blueberry with a hint of mint', price: '$30' },
      { name: 'Tropical Paradise', description: 'Mango, passion fruit & pineapple', price: '$30' },
      { name: 'Persian Nights', description: 'Rose petals with sweet cream', price: '$32' },
      { name: 'Desert Storm', description: 'Spiced chai with vanilla notes', price: '$32' }
    ],
    premium: [
      { name: 'Mystique Special', description: 'Our secret blend - top seller', price: '$35', featured: true },
      { name: 'Golden Hour', description: 'Honey, peach & chamomile fusion', price: '$35' },
      { name: 'Purple Haze', description: 'Grape, berry & lavender mix', price: '$38', featured: true },
      { name: 'Velvet Dreams', description: 'Chocolate, cherry & cream', price: '$38' }
    ]
  };

  const drinks = [
    { name: 'Mystique Mojito', description: 'Fresh mint, lime & rum', price: '$14', icon: Wine },
    { name: 'Arabian Nights', description: 'Gin, rose water & elderflower', price: '$16', icon: Wine },
    { name: 'Turkish Coffee', description: 'Authentic preparation with cardamom', price: '$8', icon: Coffee },
    { name: 'Mint Tea', description: 'Traditional Moroccan style', price: '$6', icon: Coffee }
  ];

  const food = [
    { name: 'Mezze Platter', description: 'Hummus, baba ganoush, tabbouleh', price: '$22' },
    { name: 'Lamb Kofta', description: 'Grilled skewers with tahini sauce', price: '$28' },
    { name: 'Falafel Bowl', description: 'Crispy chickpea fritters with veggies', price: '$18' },
    { name: 'Baklava Selection', description: 'Assorted honey pastries', price: '$12' }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'classic':
        return Leaf;
      case 'exotic':
        return Flame;
      case 'signature':
        return Crown;
      default:
        return Leaf;
    }
  };

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-black">
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
              Our Menu
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            Discover our carefully curated selection of premium shisha flavors, 
            signature cocktails, and authentic Middle Eastern cuisine
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {['shisha', 'drinks', 'food'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-amber-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-purple-500/20'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Shisha Menu */}
        {activeTab === 'shisha' && (
          <div className="space-y-12">
            {Object.entries(shishaMenu).map(([category, items]) => {
              const Icon = getIcon(category);
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-amber-400" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white capitalize">{category}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={`relative bg-gradient-to-br from-purple-900/20 to-black border rounded-2xl p-6 group cursor-pointer ${
                          (item as any).featured
                            ? 'border-amber-500/50 shadow-lg shadow-amber-500/10'
                            : 'border-purple-500/20'
                        }`}
                      >
                        {(item as any).featured && (
                          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-amber-500/5 group-hover:via-purple-500/5 group-hover:to-teal-500/5 rounded-2xl transition-all duration-500"></div>
                        <div className="relative z-10 flex justify-between items-start">
                          <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{item.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-400">{item.description}</p>
                          </div>
                          <span className="text-xl sm:text-2xl font-bold text-amber-400 ml-4">{item.price}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Drinks Menu */}
        {activeTab === 'drinks' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {drinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-6 group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-purple-500/0 group-hover:from-teal-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-teal-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white">{item.name}</h4>
                      </div>
                      <span className="text-2xl font-bold text-teal-400">{item.price}</span>
                    </div>
                    <p className="text-gray-400 ml-15">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Food Menu */}
        {activeTab === 'food' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {food.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-6 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-purple-500/0 group-hover:from-amber-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-amber-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{item.name}</h4>
                    </div>
                    <span className="text-2xl font-bold text-amber-400">{item.price}</span>
                  </div>
                  <p className="text-gray-400 ml-15">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
