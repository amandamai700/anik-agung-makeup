import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const socialLinks = [
  { icon: FaWhatsapp, href: 'https://wa.me/6281334878454', label: 'WhatsApp', color: '#25D366' },
  { icon: FaInstagram, href: 'https://instagram.com/anik_agung_makeup', label: 'Instagram', color: '#E1306C' },
  { icon: FaTiktok, href: 'https://tiktok.com/@anik_agun_gmakeup', label: 'TikTok', color: '#000000' },
  { icon: FaFacebookF, href: 'https://facebook.com/anik_agung_makeup', label: 'Facebook', color: '#1877F2' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Layanan', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Paket Harga', href: '/packages' },
  { label: 'Testimoni', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
];

const serviceLinks = [
  { label: 'Wedding Makeup', href: '/services' },
  { label: 'Engagement Makeup', href: '/services' },
  { label: 'Graduation Makeup', href: '/services' },
  { label: 'Photoshoot Makeup', href: '/services' },
  { label: 'Hairdo & Styling', href: '/services' },
  { label: 'Home Service', href: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F7C6D9] via-[#D4AF37] to-[#E8A9C1]" />
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#F7C6D9] opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#D4AF37] opacity-5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center">
                <img src="foto-category/favicon-logo/circle.png" alt="Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="text-xl font-playfair font-bold text-white">Anik Agung</span>
                <span className="gold-text text-xl font-playfair font-bold"> Makeup</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-poppins">
              Professional Make Up Artist untuk setiap momen spesial Anda. Tampil cantik, percaya diri, dan memukau.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#F7C6D9] hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-[#D4AF37] block" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#F7C6D9] text-sm font-poppins transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-[#D4AF37] block" />
              Layanan
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#F7C6D9] text-sm font-poppins transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-[#D4AF37] block" />
              Kontak Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#F7C6D9] mt-0.5 shrink-0" size={15} />
                <span className="text-gray-400 text-sm font-poppins">Jl.Dukuh Krajan RT 04/RW 02 Sokatengah, Bumijawa, Tegal, Jawatengah.</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#F7C6D9] shrink-0" size={15} />
                <a href="tel:+6281334878454" className="text-gray-400 hover:text-[#F7C6D9] text-sm font-poppins transition-colors">0813-3487-8454</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#F7C6D9] shrink-0" size={15} />
                <a href="mailto:hello@anikagungmakeup.com" className="text-gray-400 hover:text-[#F7C6D9] text-sm font-poppins transition-colors">hello@anikagungmakeup.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-[#F7C6D9] mt-0.5 shrink-0" size={15} />
                <div className="text-gray-400 text-sm font-poppins">
                  <p>Senin – Jumat: 08.00 – 20.00</p>
                  <p>Sabtu – Minggu: 07.00 – 21.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 rounded-3xl p-6 mb-10 border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-playfair font-semibold text-white mb-1">Dapatkan Tips Kecantikan Eksklusif</h4>
              <p className="text-gray-400 text-sm font-poppins">Subscribe dan dapatkan tips makeup & skincare terbaru langsung di inbox Anda.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email Anda..."
                className="flex-1 md:w-56 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F7C6D9] font-poppins"
              />
              <button className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs font-poppins text-center sm:text-left">
            © Copy right 2025 Anik Agung Makeup.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 font-poppins">
            <Link to="#" className="hover:text-[#F7C6D9] transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="#" className="hover:text-[#F7C6D9] transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link to="/admin" className="hover:text-[#F7C6D9] transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
