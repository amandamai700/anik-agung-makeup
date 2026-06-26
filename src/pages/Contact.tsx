import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
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

const socialLinks = [
  { icon: FaWhatsapp, label: 'WhatsApp', value: '0813-3487-8454', href: 'https://wa.me/6281334878454', color: '#25D366' },
  { icon: FaInstagram, label: 'Instagram', value: '@anik_agung_makeup', href: 'https://instagram.com/anik_agung_makeup', color: '#E1306C' },
  { icon: FaTiktok, label: 'TikTok', value: '@anik_agung_makeup', href: 'https://tiktok.com/@anik_agung_makeup', color: '#000000' },
  { icon: FaFacebookF, label: 'Facebook', value: 'Anik_Agung_Makeup', href: 'https://facebook.com/anik_agung_makeup', color: '#1877F2' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMsg = encodeURIComponent(`*PESAN BARU dari Website*\n\nNama: ${form.name}\nTelp: ${form.phone}\nEmail: ${form.email}\nSubjek: ${form.subject}\n\nPesan:\n${form.message}`);
    toast.success('Pesan terkirim!', { style: { borderRadius: '20px', background: '#fff', color: '#2B2B2B', border: '1px solid #F9D6E5' } });
    window.open(`https://wa.me/6281334878454?text=${waMsg}`, '_blank');
    setForm({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-20">
      <Toaster position="top-center" />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Hubungi Kami</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Get In <span className="italic text-[#D9A5B3]">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-xl mx-auto">
            Kami siap melayani setiap pertanyaan, konsultasi, dan permintaan booking Anda dengan sepenuh hati.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <AnimatedSection>
              <motion.div variants={fadeInUp}>
                <h2 className="font-playfair text-2xl font-bold text-[#2B2B2B] mb-6">Informasi Kontak</h2>
                <div className="space-y-5 mb-8">
                  {[
                    { icon: FiPhone, label: 'Telepon / WhatsApp', value: '0813-3487-8454', href: 'tel:+6281334878454' },
                    { icon: FiMail, label: 'Email', value: 'hello@anikagungmakeup.com', href: 'mailto:hello@anikagungmakeup.com' },
                    { icon: FiMapPin, label: 'Alamat Studio', value: 'JL.Dukuh Krajan RT 04/RW 02 Sokatengah, Bumijawa, Tegal, Jawatengah.' },
                    { icon: FiClock, label: 'Jam Operasional', value: 'Senin–Jumat: 08.00–20.00\nSabtu–Minggu: 07.00–21.00' },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 p-4 bg-[#FFF6F9] rounded-2xl border border-[#F9D6E5]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center shrink-0">
                        <item.icon className="text-white" size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-poppins mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-poppins text-sm text-[#2B2B2B] hover:text-[#D9A5B3] transition-colors">{item.value}</a>
                        ) : (
                          <p className="font-poppins text-sm text-[#2B2B2B] whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <h3 className="font-playfair text-lg font-bold text-[#2B2B2B] mb-4">Ikuti Kami</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {socialLinks.map(({ icon: Icon, label, value, href }) => (
                    <motion.a key={label} variants={fadeInUp} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#FFF6F9] rounded-2xl border border-[#F9D6E5] hover:border-[#E8A9C1] transition-all group">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center">
                        <Icon className="text-white" size={14} />
                      </div>
                      <div>
                        <p className="font-poppins text-xs text-gray-400">{label}</p>
                        <p className="font-poppins text-sm text-[#2B2B2B] group-hover:text-[#D9A5B3] transition-colors">{value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* WhatsApp Quick */}
                <motion.div variants={fadeInUp}>
                  <a href="https://wa.me/6281334878454?text=Halo+Anik+Agung+Makeup!+Saya+ingin+bertanya." target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-poppins font-semibold hover:bg-[#22c55e] transition-colors shadow-lg w-full">
                    <FaWhatsapp size={20} /> Chat Langsung via WhatsApp
                  </a>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="bg-[#FFF6F9] rounded-3xl p-8 border border-[#F9D6E5] soft-shadow">
                <h2 className="font-playfair text-2xl font-bold text-[#2B2B2B] mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Lengkap *" required
                        className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" />
                    </div>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="No. HP" type="tel"
                        className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" />
                    </div>
                  </div>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email *" type="email" required
                      className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" />
                  </div>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm text-gray-600 focus:outline-none focus:border-[#E8A9C1]">
                    <option value="">Pilih Subjek</option>
                    <option value="Informasi Layanan">Informasi Layanan</option>
                    <option value="Booking Makeup">Booking Makeup</option>
                    <option value="Harga & Paket">Harga & Paket</option>
                    <option value="Kerjasama">Kerjasama</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-gray-400" size={15} />
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Pesan Anda *" rows={5} required
                      className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1] resize-none" />
                  </div>
                  <button type="submit" className="flex items-center justify-center gap-2 btn-primary w-full text-base py-4">
                    <FiSend /> Kirim Pesan
                  </button>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden soft-shadow border border-[#F9D6E5] h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.896342372671!2d109.12759387363232!3d-7.137984370011688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f939500000001%3A0x9b1c52e7b3db7b0f!2sSDN%20Sokatengah%2001!5e0!3m2!1sid!2sid!4v1782133106851!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Lokasi Studio Anik Agung Makeup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
