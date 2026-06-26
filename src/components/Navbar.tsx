import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tentang', href: '/about' },
  { label: 'Layanan', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Paket', href: '/packages' },
  { label: 'Testimoni', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-effect shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center shadow-md">
                <img className="w-10 h-10 rounded-full " src="foto-category/favicon-logo/circle.png" alt="Logo" />
              </div>
              <div>
                <span className={`text-xl font-playfair font-bold transition-colors duration-300 ${scrolled ? 'text-[#2B2B2B]' : 'text-white drop-shadow-md'}`}>
                  Anik Agung
                </span>
                <span className="gold-text text-xl font-playfair font-bold"> Makeup</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium font-poppins transition-all duration-300 ${
                    location.pathname === link.href
                      ? 'bg-[#F7C6D9] text-[#2B2B2B]'
                      : scrolled
                      ? 'text-[#2B2B2B] hover:bg-[#F9D6E5] hover:text-[#2B2B2B]'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281334878454?text=Halo+Anik+Agung+Makeup!+Saya+ingin+booking+makeup."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 btn-primary text-sm py-2.5 px-5"
              >
                <FaWhatsapp className="text-base" />
                <span>Book Now</span>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-[#2B2B2B]' : 'text-white'}`}
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#F9D6E5]">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center">
                    <span className="text-white text-base">💄</span>
                  </div>
                  <span className="font-playfair font-bold text-[#2B2B2B]">Anik Agung <span className="gold-text">Makeup</span></span>
                </div>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-[#2B2B2B] p-1">
                  <FiX size={22} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-4 px-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center px-4 py-3.5 rounded-2xl mb-1 text-sm font-medium font-poppins transition-all ${
                        location.pathname === link.href
                          ? 'bg-[#F7C6D9] text-[#2B2B2B]'
                          : 'text-[#2B2B2B] hover:bg-[#F9D6E5]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[#F9D6E5] space-y-3">
                <a
                  href="https://wa.me/6281334878454?text=Halo+Anik+Agung+Makeup!+Saya+ingin+booking+makeup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-primary w-full text-sm"
                >
                  <FaWhatsapp />
                  Book via WhatsApp
                </a>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FiPhone size={14} />
                  <span>0813-3487-8454</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
