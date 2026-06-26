import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiMapPin, FiMessageSquare, FiUpload, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { services } from '../data';
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

const timeSlots = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || '';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    date: null as Date | null,
    time: '',
    address: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFilePreview(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      toast.error('Mohon lengkapi semua field yang diperlukan!', {
        style: { borderRadius: '20px', background: '#fff', color: '#2B2B2B', border: '1px solid #F9D6E5' }
      });
      return;
    }

    const selectedService = services.find(s => s.id === form.service);
    const dateStr = form.date ? form.date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '';
    const waMessage = encodeURIComponent(
      `🌸 *BOOKING AURELIA BEAUTY* 🌸\n\n` +
      `👤 Nama: ${form.name}\n` +
      `📱 No. HP: ${form.phone}\n` +
      `📧 Email: ${form.email}\n` +
      `💄 Layanan: ${selectedService?.title || form.service}\n` +
      `📅 Tanggal: ${dateStr}\n` +
      `⏰ Jam: ${form.time}\n` +
      `📍 Alamat: ${form.address}\n` +
      `📝 Catatan: ${form.notes}`
    );

    setSubmitted(true);
    toast.success('Booking berhasil! Kami akan segera menghubungi Anda.', {
      style: { borderRadius: '20px', background: '#fff', color: '#2B2B2B', border: '1px solid #F9D6E5' }
    });

    setTimeout(() => {
      window.open(`https://wa.me/6281334878454?text=${waMessage}`, '_blank');
    }, 1000);
  };

  return (
    <div className="pt-20">
      <Toaster position="top-center" />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Booking</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Book Your <span className="italic text-[#D9A5B3]">Session</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-xl mx-auto">
            Isi formulir di bawah ini dan kami akan segera mengkonfirmasi booking Anda via WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 bg-[#FFF6F9] rounded-3xl border border-[#F9D6E5]">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheck className="text-white text-3xl" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-[#2B2B2B] mb-4">Booking Terkirim! 🎉</h2>
                  <p className="text-gray-500 font-poppins mb-6">
                    Terima kasih! Kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi booking dalam 1x24 jam.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Buat Booking Lagi
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="bg-[#FFF6F9] rounded-3xl p-6 border border-[#F9D6E5]">
                    <h3 className="font-playfair text-xl font-bold text-[#2B2B2B] mb-5 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#F7C6D9] rounded-full flex items-center justify-center text-white text-sm">1</span>
                      Informasi Pribadi
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Lengkap *"
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" required />
                      </div>
                      <div className="relative">
                        <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="No. WhatsApp *" type="tel"
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" required />
                      </div>
                      <div className="relative sm:col-span-2">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input name="email" value={form.email} onChange={handleChange} placeholder="Email (opsional)" type="email"
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" />
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="bg-[#FFF6F9] rounded-3xl p-6 border border-[#F9D6E5]">
                    <h3 className="font-playfair text-xl font-bold text-[#2B2B2B] mb-5 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#F7C6D9] rounded-full flex items-center justify-center text-white text-sm">2</span>
                      Pilih Layanan
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {services.map(s => (
                        <button key={s.id} type="button" onClick={() => setForm(prev => ({ ...prev, service: s.id }))}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${form.service === s.id
                            ? 'border-[#D9A5B3] bg-[#F9D6E5]'
                            : 'border-[#F9D6E5] bg-white hover:border-[#E8A9C1]'}`}>
                          <p className="font-poppins font-semibold text-sm text-[#2B2B2B] mb-1">{s.title}</p>
                          <p className="text-[#D4AF37] text-xs font-poppins">Rp {(s.price/1000).toFixed(0)}K</p>
                          <p className="text-gray-400 text-xs font-poppins">{s.duration}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="bg-[#FFF6F9] rounded-3xl p-6 border border-[#F9D6E5]">
                    <h3 className="font-playfair text-xl font-bold text-[#2B2B2B] mb-5 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#F7C6D9] rounded-full flex items-center justify-center text-white text-sm">3</span>
                      Tanggal & Waktu
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-poppins text-gray-600 mb-2">
                          <FiCalendar size={14} className="text-[#D9A5B3]" /> Pilih Tanggal *
                        </label>
                        <DatePicker
                          selected={form.date}
                          onChange={(date: Date | null) => setForm(prev => ({ ...prev, date }))}
                          minDate={new Date()}
                          placeholderText="Pilih tanggal..."
                          className="w-full px-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]"
                          dateFormat="dd/MM/yyyy"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-poppins text-gray-600 mb-2">
                          <FiClock size={14} className="text-[#D9A5B3]" /> Pilih Jam *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map(time => (
                            <button key={time} type="button" onClick={() => setForm(prev => ({ ...prev, time }))}
                              className={`py-2 rounded-xl text-xs font-poppins font-medium transition-all ${form.time === time
                                ? 'bg-[#D9A5B3] text-white'
                                : 'bg-white border border-[#F9D6E5] text-gray-600 hover:border-[#E8A9C1]'}`}>
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location & Notes */}
                  <div className="bg-[#FFF6F9] rounded-3xl p-6 border border-[#F9D6E5]">
                    <h3 className="font-playfair text-xl font-bold text-[#2B2B2B] mb-5 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#F7C6D9] rounded-full flex items-center justify-center text-white text-sm">4</span>
                      Detail Tambahan
                    </h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <FiMapPin className="absolute left-4 top-4 text-gray-400" size={16} />
                        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Alamat lengkap (untuk home service)" rows={2}
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1] resize-none" />
                      </div>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-4 top-4 text-gray-400" size={16} />
                        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Catatan khusus, referensi look yang diinginkan..." rows={3}
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1] resize-none" />
                      </div>

                      {/* File Upload */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-poppins text-gray-600 mb-2">
                          <FiUpload size={14} className="text-[#D9A5B3]" /> Upload Referensi Makeup (Opsional)
                        </label>
                        <label className="flex flex-col items-center justify-center border-2 border-dashed border-[#F9D6E5] rounded-2xl p-6 cursor-pointer hover:border-[#E8A9C1] transition-colors bg-white">
                          {filePreview ? (
                            <img src={filePreview} alt="Preview" className="w-24 h-24 object-cover rounded-xl" />
                          ) : (
                            <>
                              <FiUpload className="text-[#D9A5B3] text-2xl mb-2" />
                              <span className="text-gray-400 font-poppins text-sm">Klik untuk upload foto referensi</span>
                              <span className="text-gray-300 font-poppins text-xs">JPG, PNG, WEBP (maks. 5MB)</span>
                            </>
                          )}
                          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#22c55e] text-white py-4 rounded-2xl font-poppins font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                    <FaWhatsapp size={20} />
                    Kirim Booking via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection>
                <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#F9D6E5] to-[#FFF6F9] rounded-3xl p-6 border border-[#F9D6E5]">
                  <h3 className="font-playfair text-lg font-bold text-[#2B2B2B] mb-4">Informasi Booking</h3>
                  <div className="space-y-3 text-sm font-poppins text-gray-600">
                    <div className="flex items-start gap-3">
                      <span className="text-[#D9A5B3] mt-0.5">✓</span>
                      <span>Konfirmasi via WhatsApp dalam 1x24 jam</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#D9A5B3] mt-0.5">✓</span>
                      <span>DP 50% saat konfirmasi booking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#D9A5B3] mt-0.5">✓</span>
                      <span>Reschedule hingga 3 hari sebelum acara</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#D9A5B3] mt-0.5">✓</span>
                      <span>Konsultasi gratis sebelum hari H</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-6 border border-[#F9D6E5] soft-shadow">
                  <h3 className="font-playfair text-lg font-bold text-[#2B2B2B] mb-4">Butuh Bantuan?</h3>
                  <p className="text-gray-500 text-sm font-poppins mb-4">Hubungi kami langsung untuk konsultasi dan pertanyaan seputar layanan.</p>
                  <a href="https://wa.me/6281334878454" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-2xl font-poppins font-semibold text-sm hover:bg-[#22c55e] transition-colors w-full">
                    <FaWhatsapp size={16} /> Chat WhatsApp
                  </a>
                </motion.div>

                {services.find(s => s.id === form.service) && (
                  <motion.div variants={fadeInUp} className="bg-[#FFF6F9] rounded-3xl p-6 border border-[#F9D6E5]">
                    <h3 className="font-playfair text-lg font-bold text-[#2B2B2B] mb-4">Layanan Dipilih</h3>
                    {(() => {
                      const s = services.find(sv => sv.id === form.service)!;
                      return (
                        <>
                          <p className="font-playfair font-bold text-[#D9A5B3] mb-1">{s.title}</p>
                          <p className="text-[#D4AF37] font-semibold font-poppins mb-2">Rp {s.price.toLocaleString('id-ID')}</p>
                          <p className="text-gray-400 text-xs font-poppins flex items-center gap-1"><FiClock size={11} /> {s.duration}</p>
                        </>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
