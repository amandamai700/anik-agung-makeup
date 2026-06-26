import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { portfolioItems } from '../data';

const categories = ['Semua', 'Wedding', 'Graduation', 'Engagement', 'Photoshoot', 'Hairdo'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = activeCategory === 'Semua'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory);

  const slides = filtered.map(item => ({ src: item.image.replace('fit=crop&h=800&w=600', 'fit=crop&h=1200&w=900') }));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F7C6D9] opacity-20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Portfolio</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Our <span className="italic text-[#D9A5B3]">Portfolio</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-xl mx-auto">
            Setiap karya adalah bukti dedikasi dan passion kami dalam dunia kecantikan.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-poppins font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#E8A9C1] to-[#D9A5B3] text-white shadow-md'
                    : 'bg-[#FFF6F9] text-gray-600 hover:bg-[#F9D6E5] border border-[#F9D6E5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="masonry-grid"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer soft-shadow"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-playfair text-white font-semibold text-sm">{item.title}</p>
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-poppins">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-[#D9A5B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.95)' },
        }}
      />
    </div>
  );
}
