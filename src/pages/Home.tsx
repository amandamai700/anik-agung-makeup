import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaWhatsapp, FaInstagram, FaStar, FaChevronRight, FaPlay } from 'react-icons/fa';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { services, testimonials, blogPosts, stats } from '../data';
import { fadeInUp, stagger } from '../utils/animations';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const heroImages = [
    '/foto-category/hero/hero1_image.jpeg',
    '/foto-category/hero/hero2_image.jpeg',
    '/foto-category/hero/hero3_image.jpeg',
  ];

  return (
    <div className="min-h-screen">
      {/* ═══ HERO SECTION ═══ */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="h-full w-full"
          >
            {heroImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-2 mb-5"
              >
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">
                  Professional Make Up Artist
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                Make Your
                <span className="block italic text-[#F7C6D9]">Beauty Shine</span>
                With Confidence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-white/80 text-base sm:text-lg font-poppins leading-relaxed mb-8 max-w-xl"
              >
                Tampil cantik dan percaya diri untuk setiap momen spesial bersama layanan makeup profesional kami.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://wa.me/6281334878454?text=Halo+Anik+Agung+Makeup!+Saya+ingin+booking+makeup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-primary text-sm sm:text-base"
                >
                  <FaWhatsapp />
                  Book Now
                </a>
                <Link
                  to="/portfolio"
                  className="flex items-center gap-2 border-2 border-white text-white py-3.5 px-7 rounded-full font-semibold font-poppins text-sm sm:text-base hover:bg-white hover:text-[#2B2B2B] transition-all duration-300"
                >
                  <FaPlay size={12} />
                  View Portfolio
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section ref={statsRef} className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-3xl bg-gradient-to-br from-[#FFF6F9] to-white soft-shadow hover-lift"
              >
                <div className="font-playfair text-3xl sm:text-4xl font-bold text-[#D9A5B3] mb-2">
                  {statsInView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                  <span className="text-[#D4AF37]">{stat.suffix}</span>
                </div>
                <p className="text-sm text-gray-500 font-poppins font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT SNIPPET ═══ */}
      <section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 soft-shadow">
                  <img
                    src="foto-category/profile/profile.jpeg"
                    alt="Anik Agung Makeup - Professional Makeup Artist"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/30 to-transparent" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -bottom-4 -right-4 sm:right-0 bg-white rounded-2xl p-4 soft-shadow border border-[#F9D6E5]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F7C6D9] flex items-center justify-center text-lg">💄</div>
                    <div>
                      <p className="font-playfair font-bold text-sm text-[#2B2B2B]">5+ Years</p>
                      <p className="text-xs text-gray-500 font-poppins">Experience</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute -top-4 -left-4 sm:left-0 bg-white rounded-2xl p-4 soft-shadow border border-[#F9D6E5]"
                >
                  <div className="flex items-center gap-2">
                    {[1,2,3,4,5].map(s => <FaStar key={s} className="text-[#D4AF37] text-xs" />)}
                  </div>
                  <p className="font-poppins text-xs text-gray-600 mt-1">200+ Happy Clients</p>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Tentang Kami</span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight mb-6">
                Beauty is an Art,
                <span className="block italic text-[#D9A5B3]">We are the Artists</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 font-poppins leading-relaxed mb-4">
                Anik Agung Makeup hadir dengan dedikasi penuh untuk memberikan layanan makeup profesional terbaik. Dengan pengalaman lebih dari 5 tahun, kami telah membantu ratusan wanita tampil memukau di hari-hari istimewa mereka.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 font-poppins leading-relaxed mb-8">
                Menggunakan produk premium internasional dan teknik terkini, kami berkomitmen untuk menciptakan riasan yang sempurna, tahan lama, dan sesuai kepribadian unik setiap klien.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
                {['Wedding Specialist', 'Certified MUA', 'Premium Products', 'Home Service'].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full bg-[#F9D6E5] text-[#D9A5B3] text-sm font-poppins font-medium border border-[#F7C6D9]">
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/about" className="flex items-center gap-2 text-[#D9A5B3] font-poppins font-semibold hover:gap-4 transition-all group">
                  Pelajari Lebih Lanjut
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED SERVICES ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Layanan Kami</span>
                <span className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-4">
                Our <span className="italic text-[#D9A5B3]">Services</span>
              </h2>
              <p className="text-gray-500 font-poppins max-w-xl mx-auto">
                Layanan makeup profesional untuk setiap momen spesial Anda, dari wedding hingga photoshoot.
              </p>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-[#FFF6F9] rounded-3xl overflow-hidden hover-lift border border-[#F9D6E5] card-shadow"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-poppins">
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#D4AF37] rounded-full text-white text-xs font-poppins font-semibold">
                      Rp {(service.price/1000).toFixed(0)}K
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-[#2B2B2B] mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm font-poppins leading-relaxed mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-poppins">
                      <FiClock size={12} />
                      <span>{service.duration}</span>
                    </div>
                    <Link
                      to={`/booking?service=${service.id}`}
                      className="flex items-center gap-1.5 text-[#D9A5B3] text-sm font-poppins font-semibold hover:gap-3 transition-all"
                    >
                      Book Now <FaChevronRight size={10} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              Lihat Semua Layanan <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO PREVIEW ═══ */}
      <section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Portfolio</span>
                <span className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-4">
                Our <span className="italic text-[#D9A5B3]">Work</span>
              </h2>
            </motion.div>
          </AnimatedSection>

          <div className="masonry-grid">
            {[
              'foto-category/wedding/wedding1.png',
              'foto-category/graduation/graduation1.png',
              'foto-category/wedding/wedding3.png',
              'foto-category/wedding/wedding4.png',
              'foto-category/wedding/wedding5.png',
              'foto-category/graduation/graduation1.png',
              'foto-category/graduation/graduation2.png',
              'foto-category/graduation/graduation1.png',
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Portfolio ${i+1}`}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <FaPlay className="text-[#D9A5B3] text-xs ml-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/portfolio" className="border-2 border-[#E8A9C1] text-[#D9A5B3] py-3.5 px-7 rounded-full font-semibold font-poppins hover:bg-[#E8A9C1] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
              View Full Portfolio <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-padding bg-gradient-to-br from-[#F9D6E5] via-[#FFF6F9] to-[#F7C6D9]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Testimoni</span>
                <span className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-4">
                What Our <span className="italic text-[#D9A5B3]">Clients Say</span>
              </h2>
            </motion.div>
          </AnimatedSection>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-3xl p-6 h-full soft-shadow border border-[#F9D6E5]">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="text-[#D4AF37] text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-poppins text-sm leading-relaxed mb-6 italic">"{t.review}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F7C6D9]">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-[#2B2B2B] text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400 font-poppins">{t.service} · {t.date}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ═══ BLOG PREVIEW ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Beauty Blog</span>
                <span className="w-8 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-4">
                Tips & <span className="italic text-[#D9A5B3]">Inspirasi</span>
              </h2>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-[#FFF6F9] rounded-3xl overflow-hidden hover-lift border border-[#F9D6E5]"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-[#D9A5B3] text-xs font-poppins font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-poppins mb-3">
                    <span className="flex items-center gap-1"><FiCalendar size={11} /> {post.date}</span>
                    <span className="flex items-center gap-1"><FiClock size={11} /> {post.readTime} read</span>
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-[#2B2B2B] mb-2 line-clamp-2 group-hover:text-[#D9A5B3] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-poppins line-clamp-2 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[#D9A5B3] text-sm font-poppins font-semibold hover:gap-4 transition-all">
                    Baca Selengkapnya <FiArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/blog" className="border-2 border-[#E8A9C1] text-[#D9A5B3] py-3.5 px-7 rounded-full font-semibold font-poppins hover:bg-[#E8A9C1] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
              Lihat Semua Artikel <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ INSTAGRAM ═══ */}
      <section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaInstagram className="text-[#E1306C] text-2xl" />
                <span className="font-playfair text-2xl font-bold text-[#2B2B2B]">@anik_agung_makeup</span>
              </div>
              <p className="text-gray-500 font-poppins text-sm">Follow kami di Instagram untuk inspirasi kecantikan setiap hari</p>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
            {[
              'foto-category/engagement/engagement2.png',
              'foto-category/graduation/graduation1.png',
              'foto-category/wedding/wedding6.png',
              'foto-category/homeservice/homeservice1.png',
              'foto-category/hairdo/hairdo1.png',
              'foto-category/wedding/wedding1.png'
            ].map((img, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/anik_agung_makeup"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <img src={img} alt={`Instagram ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <FaInstagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="foto-category/photoshoot/photoshoot1.png"
            alt="CTA Background"
            className="w-full h-200 object-cover"
            
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#D9A5B3]/60 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-poppins tracking-widest uppercase">Ready to Shine?</span>
              <span className="w-12 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Wujudkan <span className="italic text-[#F7C6D9]">Kecantikan Impian</span> Anda Bersama Kami
            </h2>
            <p className="text-white/80 font-poppins mb-8 max-w-xl mx-auto">
              Hubungi kami sekarang dan dapatkan konsultasi gratis. Kami siap membantu Anda tampil memukau di setiap momen spesial.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/6281334878454?text=Halo+Anik+Agung+Makeup!+Saya+ingin+booking+makeup."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white py-3.5 px-7 rounded-full font-poppins font-semibold hover:bg-[#22c55e] transition-colors shadow-lg"
              >
                <FaWhatsapp size={18} />
                Chat di WhatsApp
              </a>
              <Link to="/booking" className="flex items-center gap-2 btn-gold py-3.5 px-7">
                <FiCalendar size={18} />
                Book Sekarang
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
