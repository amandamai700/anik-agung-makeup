import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { services } from '../data';
import { fadeInUp, stagger } from '../utils/animations';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F7C6D9] opacity-20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Layanan Kami</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Our <span className="italic text-[#D9A5B3]">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-2xl mx-auto leading-relaxed">
            Layanan makeup profesional untuk setiap momen spesial Anda. Dari pernikahan mewah hingga photoshoot profesional.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}
              >
                <div style={{ direction: 'ltr' }} className="relative group">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] soft-shadow">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-[#D4AF37] rounded-full text-white font-poppins font-semibold text-sm">
                      Mulai Rp {service.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <div style={{ direction: 'ltr' }}>
                  <span className="inline-flex px-4 py-1.5 bg-[#F9D6E5] text-[#D9A5B3] rounded-full text-xs font-poppins font-medium mb-4">
                    {service.category}
                  </span>
                  <h2 className="font-playfair text-3xl font-bold text-[#2B2B2B] mb-4">{service.title}</h2>
                  <p className="text-gray-600 font-poppins leading-relaxed mb-6">{service.description}</p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-poppins">
                      <FiClock className="text-[#D9A5B3]" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-[#D4AF37] font-poppins font-semibold text-sm">Rp {service.price.toLocaleString('id-ID')}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-playfair font-semibold text-[#2B2B2B] mb-3">Yang Termasuk:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <FiCheck className="text-[#D9A5B3] shrink-0" size={14} />
                          <span className="text-gray-600 text-sm font-poppins">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="mb-6">
                    <h4 className="font-playfair font-semibold text-[#2B2B2B] mb-3">FAQ:</h4>
                    <div className="space-y-2">
                      {service.faq.map((faq, fi) => {
                        const key = `${service.id}-${fi}`;
                        return (
                          <div key={fi} className="border border-[#F9D6E5] rounded-2xl overflow-hidden">
                            <button onClick={() => setOpenFaq(openFaq === key ? null : key)}
                              className="w-full flex items-center justify-between p-4 text-left bg-[#FFF6F9] hover:bg-[#F9D6E5] transition-colors">
                              <span className="font-poppins text-sm font-medium text-[#2B2B2B]">{faq.q}</span>
                              <span className={`text-[#D9A5B3] transition-transform ${openFaq === key ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            {openFaq === key && (
                              <div className="p-4 bg-white">
                                <p className="text-gray-500 text-sm font-poppins">{faq.a}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link to={`/booking?service=${service.id}`} className="btn-primary flex items-center gap-2 text-sm">
                      Book Sekarang <FiArrowRight />
                    </Link>
                    <a href={`https://wa.me/6281334878454?text=Halo!+Saya+tertarik+dengan+layanan+${service.title}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] py-3 px-5 rounded-full font-poppins font-semibold text-sm hover:bg-[#25D366] hover:text-white transition-all">
                      <FaWhatsapp /> Tanya Dulu
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#F9D6E5] to-[#FFF6F9]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <motion.h2 variants={fadeInUp} className="font-playfair text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Tidak Yakin Pilih <span className="italic text-[#D9A5B3]">Layanan Apa?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 font-poppins mb-8">
              Konsultasikan kebutuhan Anda dengan tim kami secara gratis. Kami akan membantu memilih layanan yang paling sesuai.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="https://wa.me/6281334878454?text=Halo+Anik+Agung+Makeup!+Saya+ingin+konsultasi+layanan+makeup."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white py-3.5 px-7 rounded-full font-poppins font-semibold hover:bg-[#22c55e] transition-colors inline-flex shadow-lg mx-auto">
                <FaWhatsapp size={18} /> Konsultasi Gratis
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
