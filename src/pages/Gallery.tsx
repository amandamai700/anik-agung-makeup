import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const allImages = [
  { src: 'https://images.pexels.com/photos/9899414/pexels-photo-9899414.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Bridal makeup elegant', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/20328388/pexels-photo-20328388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Bride at mirror', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/1327353/pexels-photo-1327353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800', alt: 'Makeup application', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/13749115/pexels-photo-13749115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Graduation makeup', category: 'Wisuda' },
  { src: 'https://images.pexels.com/photos/30355872/pexels-photo-30355872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Graduate bouquet', category: 'Wisuda' },
  { src: 'https://images.pexels.com/photos/14011895/pexels-photo-14011895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Graduate portrait', category: 'Wisuda' },
  { src: 'https://images.pexels.com/photos/10862038/pexels-photo-10862038.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Photoshoot glamour', category: 'Photoshoot' },
  { src: 'https://images.pexels.com/photos/22605221/pexels-photo-22605221.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Studio makeup', category: 'Photoshoot' },
  { src: 'https://images.pexels.com/photos/15249623/pexels-photo-15249623.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Lipstick application', category: 'Photoshoot' },
  { src: 'https://images.pexels.com/photos/31266975/pexels-photo-31266975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Bridal tiara', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/31252207/pexels-photo-31252207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Soft bridal portrait', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/5150274/pexels-photo-5150274.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Wedding dress glam', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/5157815/pexels-photo-5157815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Hairdo styling', category: 'Hairdo' },
  { src: 'https://images.pexels.com/photos/22605223/pexels-photo-22605223.png?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'MUA and model', category: 'Photoshoot' },
  { src: 'https://images.pexels.com/photos/32588057/pexels-photo-32588057.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Bride getting ready', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/32588056/pexels-photo-32588056.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Joyful bride and MUA', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/19969902/pexels-photo-19969902.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Lipstick application', category: 'Photoshoot' },
  { src: 'https://images.pexels.com/photos/19220072/pexels-photo-19220072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Bridal touch up', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/26181074/pexels-photo-26181074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600', alt: 'Bride with brushes', category: 'Photoshoot' },
  { src: 'https://images.pexels.com/photos/29569638/pexels-photo-29569638.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800', alt: 'Bride with stylists', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/4938508/pexels-photo-4938508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=450', alt: 'Luxury cosmetics', category: 'Products' },
  { src: 'https://images.pexels.com/photos/850801/pexels-photo-850801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', alt: 'Red lipstick luxury', category: 'Products' },
  { src: 'https://images.pexels.com/photos/4938514/pexels-photo-4938514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=800', alt: 'Makeup flat lay', category: 'Products' },
  { src: 'https://images.pexels.com/photos/7670767/pexels-photo-7670767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', alt: 'Golden compact', category: 'Products' },
];

const categories = ['Semua', 'Wedding', 'Wisuda', 'Photoshoot', 'Hairdo', 'Products'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = activeCategory === 'Semua' ? allImages : allImages.filter(img => img.category === activeCategory);
  const slides = filtered.map(img => ({ src: img.src }));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Gallery</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Beauty <span className="italic text-[#D9A5B3]">Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-xl mx-auto">
            Koleksi foto terbaik dari berbagai sesi makeup dan penataan kami. Setiap gambar menceritakan keindahan yang unik.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-poppins font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#E8A9C1] to-[#D9A5B3] text-white shadow-md'
                    : 'bg-[#FFF6F9] text-gray-600 hover:bg-[#F9D6E5] border border-[#F9D6E5]'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 font-poppins text-sm mb-8">{filtered.length} foto · Klik untuk memperbesar</p>
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="masonry-grid">
              {filtered.map((img, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <svg className="w-5 h-5 text-[#D9A5B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <span className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-[#2B2B2B] text-xs font-poppins font-medium">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(0,0,0,0.95)' } }}
      />
    </div>
  );
}
