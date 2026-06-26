import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { faqs } from '../data';
import { Link } from 'react-router-dom';



export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">FAQ</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Frequently Asked <span className="italic text-[#D9A5B3]">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering ditanyakan. Tidak menemukan jawaban Anda? Hubungi kami langsung!
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-[#F9D6E5] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openIndex === i ? 'bg-[#F9D6E5]' : 'bg-[#FFF6F9] hover:bg-[#F9D6E5]'}`}
                >
                  <span className="font-poppins font-medium text-[#2B2B2B] text-sm pr-4">{faq.q}</span>
                  <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FiChevronDown className="text-[#D9A5B3] shrink-0" size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-white border-t border-[#F9D6E5]">
                        <p className="text-gray-600 font-poppins text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-gradient-to-br from-[#F9D6E5] to-[#FFF6F9] rounded-3xl border border-[#F9D6E5]">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-playfair text-2xl font-bold text-[#2B2B2B] mb-3">Masih Ada Pertanyaan?</h3>
            <p className="text-gray-500 font-poppins text-sm mb-6">Tim kami siap menjawab semua pertanyaan Anda dengan ramah dan profesional.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/6281334878454" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm">
                Chat WhatsApp
              </a>
              <Link to="/contact" className="border-2 border-[#E8A9C1] text-[#D9A5B3] py-3 px-6 rounded-full font-poppins font-semibold text-sm hover:bg-[#E8A9C1] hover:text-white transition-all">
                Kirim Email
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
