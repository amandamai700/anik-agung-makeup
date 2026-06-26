import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaCrown } from 'react-icons/fa';
import { packages } from '../data';
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

export default function Packages() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Paket Harga</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Pricing <span className="italic text-[#D9A5B3]">Packages</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Semua paket menggunakan produk premium.
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className={`relative rounded-3xl overflow-hidden ${pkg.popular
                    ? 'bg-gradient-to-b from-[#D9A5B3] to-[#C890A4] text-white shadow-2xl scale-105'
                    : 'bg-[#FFF6F9] border border-[#F9D6E5] soft-shadow'
                  }`}
              >
                {pkg.badge && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-poppins font-bold ${pkg.popular ? 'bg-[#D4AF37] text-white' : 'bg-[#D4AF37] text-white'}`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-8">
                  {pkg.popular && (
                    <div className="flex items-center gap-2 mb-3">
                      <FaCrown className="text-[#D4AF37] text-lg" />
                      <span className="text-white/80 text-xs font-poppins font-medium">MOST POPULAR</span>
                    </div>
                  )}

                  <h3 className={`font-playfair text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-[#2B2B2B]'}`}>{pkg.name}</h3>
                  <p className={`font-poppins text-sm mb-6 leading-relaxed ${pkg.popular ? 'text-white/80' : 'text-gray-500'}`}>{pkg.description}</p>

                  <div className="mb-6">
                    {pkg.originalPrice && (
                      <p className={`font-poppins text-sm line-through mb-1 ${pkg.popular ? 'text-white/50' : 'text-gray-400'}`}>
                        Rp {pkg.originalPrice.toLocaleString('id-ID')}
                      </p>
                    )}
                    <div className="flex items-end gap-1">
                      <span className={`font-playfair text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-[#D9A5B3]'}`}>
                        Rp {(pkg.price / 1000).toFixed(0)}K
                      </span>
                      <span className={`font-poppins text-sm mb-1.5 ${pkg.popular ? 'text-white/70' : 'text-gray-400'}`}>/sesi</span>
                    </div>
                    {pkg.originalPrice && (
                      <span className="inline-flex px-2 py-0.5 bg-green-500 text-white text-xs rounded-full font-poppins">
                        Hemat Rp {((pkg.originalPrice - pkg.price) / 1000).toFixed(0)}K
                      </span>
                    )}
                  </div>

                  <div className={`h-px mb-6 ${pkg.popular ? 'bg-white/20' : 'bg-[#F9D6E5]'}`} />

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.popular ? 'bg-white/20' : 'bg-[#F9D6E5]'}`}>
                          <FiCheck className={`text-xs ${pkg.popular ? 'text-white' : 'text-[#D9A5B3]'}`} />
                        </div>
                        <span className={`font-poppins text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Link to={`/booking?package=${pkg.id}`}
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-poppins font-semibold text-sm transition-all ${
                        pkg.popular
                          ? 'bg-white text-[#D9A5B3] hover:bg-[#FFF6F9]'
                          : 'bg-gradient-to-r from-[#E8A9C1] to-[#D9A5B3] text-white hover:from-[#D9A5B3] hover:to-[#C890A4]'
                      }`}>
                      Pilih Paket Ini <FiArrowRight />
                    </Link>
                    <a href={`https://wa.me/6281334878454?text=Halo!+Saya+tertarik+dengan+paket+${pkg.name}`}
                      target="_blank" rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-full font-poppins font-medium text-sm transition-all ${
                        pkg.popular
                          ? 'border-2 border-white/40 text-white hover:bg-white/10'
                          : 'border-2 border-[#F9D6E5] text-gray-500 hover:border-[#E8A9C1]'
                      }`}>
                      <FaWhatsapp /> Tanya via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 p-6 bg-[#FFF6F9] rounded-3xl border border-[#F9D6E5] text-center">
            <p className="text-gray-500 font-poppins text-sm">
              💡 Harga di atas belum termasuk biaya transport untuk home service. Hubungi kami untuk mendapatkan penawaran custom sesuai kebutuhan spesial Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="font-playfair text-3xl font-bold text-[#2B2B2B] mb-4">
                Add-On <span className="italic text-[#D9A5B3]">Services</span>
              </h2>
              <p className="text-gray-500 font-poppins text-sm">Tambahan layanan untuk melengkapi penampilan Anda</p>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Trial Makeup', price: 'Rp 300.000', desc: 'Uji coba makeup sebelum hari H' },
              { name: 'Extra Look', price: 'Rp 250.000', desc: 'Tambahan look untuk photoshoot' },
              { name: 'Hairdo Add-on', price: 'Rp 200.000', desc: 'Penataan rambut tambahan' },
              { name: 'Assistance (4 jam)', price: 'Rp 500.000', desc: 'Pendampingan MUA seharian' },
              { name: 'Eyelash Premium', price: 'Rp 75.000', desc: 'Upgrade ke eyelash mewah' },
              { name: 'Transport (Jabodetabek)', price: 'Rp 50-200K', desc: 'Biaya perjalanan home service' },
            ].map((addon, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-5 bg-white rounded-2xl border border-[#F9D6E5] soft-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-playfair font-bold text-[#2B2B2B] text-base">{addon.name}</h4>
                  <span className="text-[#D4AF37] font-poppins font-semibold text-sm whitespace-nowrap ml-2">{addon.price}</span>
                </div>
                <p className="text-gray-500 text-xs font-poppins">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="font-playfair text-3xl font-bold text-[#2B2B2B]">
                Frequently Asked <span className="italic text-[#D9A5B3]">Questions</span>
              </h2>
            </motion.div>
          </AnimatedSection>
          <div className="space-y-3">
            {[
              { q: 'Apakah harga bisa dinegosiasi?', a: 'Untuk event group atau multiple services, tersedia diskon khusus. Hubungi kami untuk penawaran terbaik.' },
              { q: 'Bagaimana sistem pembayaran?', a: 'DP 50% saat booking, sisanya dibayar sebelum atau setelah acara. Pembayaran via transfer bank, GoPay, OVO, atau QRIS.' },
              { q: 'Apakah ada garansi kepuasan?', a: 'Ya! Kami berkomitmen penuh untuk kepuasan klien. Jika ada yang kurang memuaskan, kami siap melakukan penyesuaian.' },
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="border border-[#F9D6E5] rounded-2xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 bg-[#FFF6F9] cursor-pointer list-none">
                    <span className="font-poppins font-medium text-[#2B2B2B] text-sm">{faq.q}</span>
                    <span className="text-[#D9A5B3] group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="p-5 bg-white">
                    <p className="text-gray-500 font-poppins text-sm">{faq.a}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
