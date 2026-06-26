import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data';
import { fadeInUp, stagger } from '../utils/animations';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const allTestimonials = [
  ...testimonials,
  {
    id: '7', name: 'Mega Sartika', rating: 5,
    review: 'Sangat puas dengan hasilnya! Makeup-nya natural tapi tetap glam. Cocok banget buat foto pernikahan kami. Tim Aurelia Beauty sangat ramah dan profesional.',
    avatar: 'https://images.pexels.com/photos/9899414/pexels-photo-9899414.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Wedding Makeup', date: 'Juni 2025'
  },
  {
    id: '8', name: 'Anggi Pertiwi', rating: 5,
    review: 'Best decision memilih Aurelia Beauty untuk makeup wisuda! Hasilnya melebihi ekspektasi dan tahan lama banget. Pasti akan recommend ke teman-teman!',
    avatar: 'https://images.pexels.com/photos/30355872/pexels-photo-30355872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Graduation Makeup', date: 'Juni 2025'
  },
  {
    id: '9', name: 'Feby Rahayu', rating: 5,
    review: 'Sudah 3x booking Aurelia Beauty untuk berbagai acara dan selalu memuaskan. Konsistensi kualitasnya luar biasa. Harga pun sangat worth it!',
    avatar: 'https://images.pexels.com/photos/31266975/pexels-photo-31266975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Multiple Services', date: 'Juli 2025'
  },
];

export default function Testimonials() {
  const avgRating = (allTestimonials.reduce((sum, t) => sum + t.rating, 0) / allTestimonials.length).toFixed(1);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Testimoni</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Happy <span className="italic text-[#D9A5B3]">Clients</span>
          </motion.h1>

          {/* Rating Summary */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="inline-flex flex-col items-center bg-white rounded-3xl px-10 py-6 soft-shadow border border-[#F9D6E5]">
            <div className="flex items-center gap-1 mb-2">
              {[1,2,3,4,5].map(s => <FaStar key={s} className="text-[#D4AF37] text-2xl" />)}
            </div>
            <div className="font-playfair text-5xl font-bold text-[#D9A5B3]">{avgRating}</div>
            <p className="text-gray-500 font-poppins text-sm mt-1">dari {allTestimonials.length} ulasan</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`bg-[#FFF6F9] rounded-3xl p-6 border border-[#F9D6E5] soft-shadow hover-lift ${i === 0 || i === 4 ? 'md:col-span-1' : ''}`}
              >
                <FaQuoteLeft className="text-[#F7C6D9] text-3xl mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <FaStar key={si} className="text-[#D4AF37] text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 font-poppins text-sm leading-relaxed mb-6 italic">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F9D6E5]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F7C6D9] shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-[#2B2B2B] text-sm">{t.name}</p>
                    <p className="text-xs text-[#D9A5B3] font-poppins font-medium">{t.service}</p>
                    <p className="text-xs text-gray-400 font-poppins">{t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-gradient-to-br from-[#F9D6E5] to-[#FFF6F9]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-4xl mb-4">💌</motion.div>
            <motion.h2 variants={fadeInUp} className="font-playfair text-3xl font-bold text-[#2B2B2B] mb-4">
              Sudah Pernah Pakai Jasa Kami?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 font-poppins mb-8">
              Bagikan pengalaman Anda dan bantu calon klien lainnya untuk membuat keputusan terbaik.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/6281334878454?text=Halo!+Saya+ingin+memberikan+testimoni+untuk+Anik+Agung+Makeup."
                target="_blank" rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2">
                Kirim Testimoni
              </a>
              <a href="https://g.page/anikagungmakeup" target="_blank" rel="noopener noreferrer"
                className="border-2 border-[#E8A9C1] text-[#D9A5B3] py-3.5 px-7 rounded-full font-poppins font-semibold hover:bg-[#E8A9C1] hover:text-white transition-all duration-300 flex items-center gap-2">
                Review di Google
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
