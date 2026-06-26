import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight, FiSearch } from 'react-icons/fi';
import { blogPosts } from '../data';

const categories = ['Semua', 'Wedding Tips', 'Skincare', 'Beauty Trend', 'Tips Makeup'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter(post => {
    const matchCategory = activeCategory === 'Semua' || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featured = blogPosts[0];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-poppins font-medium tracking-widest uppercase">Beauty Blog</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6">
            Beauty <span className="italic text-[#D9A5B3]">Insights</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gray-600 font-poppins max-w-xl mx-auto mb-8">
            Tips kecantikan, inspirasi makeup, dan panduan skincare dari para ahli.
          </motion.p>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari artikel..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full border border-[#F9D6E5] bg-white font-poppins text-sm focus:outline-none focus:border-[#E8A9C1] soft-shadow"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden soft-shadow border border-[#F9D6E5] hover-lift">
            <div className="relative overflow-hidden aspect-video lg:aspect-auto">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-white rounded-full text-xs font-poppins font-semibold">
                FEATURED
              </span>
            </div>
            <div className="p-8 lg:p-10 bg-[#FFF6F9] flex flex-col justify-center">
              <span className="inline-flex px-3 py-1 bg-[#F9D6E5] text-[#D9A5B3] rounded-full text-xs font-poppins font-medium mb-4 w-fit">
                {featured.category}
              </span>
              <h2 className="font-playfair text-2xl lg:text-3xl font-bold text-[#2B2B2B] mb-4 group-hover:text-[#D9A5B3] transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 font-poppins text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-poppins mb-6">
                <span className="flex items-center gap-1.5"><FiCalendar size={12} /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><FiClock size={12} /> {featured.readTime} read</span>
              </div>
              <Link to={`/blog/${featured.id}`} className="flex items-center gap-2 text-[#D9A5B3] font-poppins font-semibold hover:gap-4 transition-all w-fit">
                Baca Selengkapnya <FiArrowRight />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-poppins font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#E8A9C1] to-[#D9A5B3] text-white shadow-md'
                    : 'bg-[#FFF6F9] text-gray-600 hover:bg-[#F9D6E5] border border-[#F9D6E5]'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-[#FFF6F9]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-playfair text-2xl text-gray-400 mb-2">Artikel Tidak Ditemukan</p>
              <p className="text-gray-400 font-poppins text-sm">Coba kata kunci lain atau pilih kategori berbeda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group bg-white rounded-3xl overflow-hidden hover-lift border border-[#F9D6E5] soft-shadow"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
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
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-[#FFF6F9] text-gray-400 rounded-full text-xs font-poppins">#{tag}</span>
                      ))}
                    </div>
                    <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[#D9A5B3] text-sm font-poppins font-semibold hover:gap-4 transition-all">
                      Baca Selengkapnya <FiArrowRight />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
