import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaAward, FaHeart } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { fadeInUp, stagger } from '../utils/animations';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const teamMembers = [
  {
    name: 'Aurelia Sari',
    role: 'Lead MUA & Founder',
    image: 'https://images.pexels.com/photos/9899414/pexels-photo-9899414.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: '10+ tahun pengalaman sebagai MUA profesional dengan spesialisasi wedding makeup.'
  },
  {
    name: 'Bella Putri',
    role: 'Senior Makeup Artist',
    image: 'https://images.pexels.com/photos/31252207/pexels-photo-31252207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Spesialis photoshoot dan editorial makeup dengan portfolio internasional.'
  },
  {
    name: 'Clara Wulan',
    role: 'Hair Stylist & MUA',
    image: 'https://images.pexels.com/photos/15524744/pexels-photo-15524744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
    bio: 'Ahli hairdo dan penataan rambut untuk berbagai momen spesial.'
  },
];

const certifications = [
  'Certificate',
  'Certificate',
  'Certificate',
  'Certificate',
  'Certificate',
  'Certificate'
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F7C6D9] opacity-20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Tentang Kami</span>
              <span className="w-8 h-px bg-[#D4AF37]" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
              Passion for <span className="italic text-[#D9A5B3]">Beauty</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-gray-600 font-poppins max-w-2xl mx-auto leading-relaxed">
              Kami adalah tim makeup artist profesional yang berdedikasi untuk membantu setiap wanita tampil cantik dan percaya diri di momen-momen paling berharga dalam hidup mereka.
            </motion.p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '💄', value: '200+', label: 'Happy Clients' },
              { icon: '💍', value: '100+', label: 'Wedding Projects' },
              { icon: '⭐', value: '5+', label: 'Years Experience' },
              { icon: '🏆', value: '15+', label: 'Awards Won' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.5 }}
                className="text-center p-6 bg-white rounded-3xl soft-shadow border border-[#F9D6E5]">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-playfair text-3xl font-bold text-[#D9A5B3] mb-1">{s.value}</div>
                <p className="text-sm text-gray-500 font-poppins">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto soft-shadow">
                  <img src="foto-category/profile/profile1.jpeg"
                    alt="Anik Agung Makeup Story" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-5 soft-shadow border border-[#F9D6E5] max-w-[180px]">
                  <FaAward className="text-[#D4AF37] text-2xl mb-2" />
                  <p className="font-playfair font-bold text-[#2B2B2B] text-sm">Award Winning</p>
                  <p className="text-xs text-gray-400 font-poppins">Best MUA 2024</p>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Our Story</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-playfair text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-6">
                Dari Passion Menjadi <span className="italic text-[#D9A5B3]">Profesi</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 font-poppins leading-relaxed mb-4">
                Aurelia Beauty lahir dari kecintaan yang mendalam terhadap dunia kecantikan. Berawal dari merias keluarga dan teman-teman pada tahun 2014, Aurelia Sari perlahan membangun reputasinya sebagai salah satu MUA terbaik di Indonesia.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 font-poppins leading-relaxed mb-8">
                Dengan komitmen untuk terus belajar dan berkembang, kami telah menyelesaikan berbagai sertifikasi internasional dan bekerja sama dengan brand kecantikan premium dunia. Setiap klien adalah karya seni tersendiri bagi kami.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3">
                {['Menggunakan produk makeup premium internasional', 'Teknik makeup terkini sesuai tren global', 'Personalisasi sesuai karakter unik setiap klien', 'Layanan profesional dan tepat waktu'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FiCheckCircle className="text-[#D9A5B3] shrink-0" size={18} />
                    <span className="text-gray-600 font-poppins text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      {/*<section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Tim Kami</span>
                <span className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2B2B2B]">
                Meet Our <span className="italic text-[#D9A5B3]">Artists</span>
              </h2>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden hover-lift soft-shadow border border-[#F9D6E5] text-center">
                <div className="relative aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-[#2B2B2B] mb-1">{member.name}</h3>
                  <p className="text-[#D9A5B3] font-poppins text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 font-poppins text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex items-center justify-center gap-1 mt-4">
                    {[1,2,3,4,5].map(s => <FaStar key={s} className="text-[#D4AF37] text-xs" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
                Our <span className="italic text-[#D9A5B3]">Certifications</span>
              </h2>
              <p className="text-gray-500 font-poppins">Berstandar internasional untuk kualitas terbaik</p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <img src="foto-category/wedding/wedding1.png" alt="Certification 1" className="w-full h-100 object-cover rounded-2xl soft-shadow border border-[#F9D6E5]" loading="lazy" />
                <img src="foto-category/wedding/wedding2.png" alt="Certification 2" className="w-full h-100 object-cover rounded-2xl soft-shadow border border-[#F9D6E5]" loading="lazy" />
                <img src="foto-category/wedding/wedding3.png" alt="Certification 3" className="w-full h-100 object-cover rounded-2xl soft-shadow border border-[#F9D6E5]" loading="lazy" />
                <img src="foto-category/wedding/wedding4.png" alt="Certification 4" className="w-full h-100 object-cover rounded-2xl soft-shadow border border-[#F9D6E5]" loading="lazy" />
                <img src="foto-category/wedding/wedding5.png" alt="Certification 5" className="w-full h-100 object-cover rounded-2xl soft-shadow border border-[#F9D6E5]" loading="lazy" />
                <img src="foto-category/wedding/wedding6.png" alt="Certification 6" className="w-full h-100 object-cover rounded-2xl soft-shadow border border-[#F9D6E5]" loading="lazy" />
              </motion.div>
          </AnimatedSection>
        
          {/*<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF6F9] border border-[#F9D6E5]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center shrink-0">
                  <FaAward className="text-white text-sm" />
                </div>
                <span className="font-poppins text-sm text-gray-700">{cert}</span>
              </motion.div>
            ))}
          </div>*/}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-[#F9D6E5] to-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2B2B2B]">
                Our <span className="italic text-[#D9A5B3]">Values</span>
              </h2>
            </motion.div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHeart />, title: 'Passion', desc: 'Setiap riasan dikerjakan dengan penuh cinta dan dedikasi tinggi untuk hasil terbaik.' },
              { icon: <FaStar />, title: 'Excellence', desc: 'Kami tidak pernah berkompromi dengan kualitas. Standar tinggi di setiap pekerjaan.' },
              { icon: <FaAward />, title: 'Integrity', desc: 'Transparansi harga, tepat waktu, dan profesionalisme dalam setiap aspek pelayanan.' },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="text-center p-8 bg-white rounded-3xl soft-shadow border border-[#F9D6E5]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center text-white text-xl mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#2B2B2B] mb-3">{v.title}</h3>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
