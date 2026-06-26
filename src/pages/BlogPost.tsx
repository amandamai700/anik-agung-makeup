import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft, FiTag } from 'react-icons/fi';
import { blogPosts } from '../data';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  const related = blogPosts.filter(p => p.id !== id).slice(0, 3);

  if (!post) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <div className="text-5xl mb-4">📝</div>
        <h2 className="font-playfair text-3xl font-bold text-[#2B2B2B] mb-4">Artikel Tidak Ditemukan</h2>
        <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
          <FiArrowLeft /> Kembali ke Blog
        </Link>
      </div>
    );
  }

  const sampleContent = `
Setiap wanita berhak tampil cantik dan percaya diri di hari-hari spesial mereka. Di artikel ini, kami akan berbagi tips dan trik profesional dari tim Aurelia Beauty untuk membantu Anda memahami dunia makeup lebih dalam.

## Persiapan adalah Kunci

Sebelum memulai aplikasi makeup, persiapan kulit adalah langkah yang paling krusial. Pastikan kulit Anda bersih, terhidrasi dengan baik, dan memiliki dasar yang sempurna.

**Langkah-langkah dasar yang harus dilakukan:**

1. Bersihkan wajah dengan cleanser yang sesuai jenis kulit
2. Gunakan toner untuk menyeimbangkan pH kulit
3. Aplikasikan serum yang kaya akan antioksidan
4. Gunakan moisturizer yang ringan namun efektif
5. Aplikasikan sunscreen sebagai perlindungan terakhir

## Teknik Aplikasi yang Tepat

Dengan teknik yang benar, hasil makeup akan jauh lebih sempurna dan tahan lama. Tim profesional Aurelia Beauty selalu menggunakan teknik layering dan blending yang teliti untuk memastikan setiap klien mendapatkan hasil terbaik.

## Produk Premium untuk Hasil Terbaik

Kami percaya bahwa investasi pada produk yang berkualitas adalah investasi pada kepercayaan diri Anda. Produk premium memberikan pigmentasi yang lebih baik, ketahanan yang lebih lama, dan keamanan yang terjamin untuk kulit sensitif.

## Penutup

Kecantikan sejati datang dari dalam, namun makeup yang tepat dapat membantu Anda mengekspresikan kepribadian dan meningkatkan kepercayaan diri. Jangan ragu untuk berkonsultasi dengan tim Aurelia Beauty untuk mendapatkan saran terbaik sesuai kebutuhan Anda.
  `;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative aspect-[21/9] max-h-[500px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="px-3 py-1 bg-[#D4AF37] text-white rounded-full text-xs font-poppins font-semibold mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/70 text-sm font-poppins">
              <span className="flex items-center gap-1.5"><FiCalendar size={13} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><FiClock size={13} /> {post.readTime} read</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#D9A5B3] font-poppins text-sm mb-8 hover:gap-4 transition-all">
            <FiArrowLeft /> Kembali ke Blog
          </Link>

          <div className="prose max-w-none">
            <p className="text-gray-600 font-poppins leading-relaxed text-lg mb-6 italic">{post.excerpt}</p>
            <div className="text-gray-600 font-poppins leading-relaxed text-sm space-y-4">
              {sampleContent.split('\n').filter(Boolean).map((line, i) => {
                if (line.startsWith('## ')) return <h2 key={i} className="font-playfair text-2xl font-bold text-[#2B2B2B] mt-8 mb-4">{line.replace('## ', '')}</h2>;
                if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-semibold text-[#2B2B2B]">{line.replace(/\*\*/g, '')}</p>;
                if (line.match(/^\d\./)) return <div key={i} className="flex items-start gap-3 my-1"><span className="w-5 h-5 rounded-full bg-[#F7C6D9] text-[#D9A5B3] text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{line[0]}</span><span>{line.slice(3)}</span></div>;
                return <p key={i} className="leading-relaxed">{line}</p>;
              })}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-[#F9D6E5]">
            <div className="flex items-center gap-2 flex-wrap">
              <FiTag className="text-gray-400" size={14} />
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#FFF6F9] border border-[#F9D6E5] text-gray-500 rounded-full text-xs font-poppins hover:bg-[#F9D6E5] cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="mt-8 p-6 bg-[#FFF6F9] rounded-3xl border border-[#F9D6E5] flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center text-xl shrink-0">
              💄
            </div>
            <div>
              <p className="font-playfair font-bold text-[#2B2B2B]">{post.author}</p>
              <p className="text-gray-500 font-poppins text-sm">Professional Makeup Artist & Beauty Expert dengan pengalaman 5+ tahun di industri kecantikan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-[#FFF6F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-playfair text-2xl font-bold text-[#2B2B2B] mb-8">Artikel Terkait</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rpost, i) => (
              <motion.article key={rpost.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden hover-lift border border-[#F9D6E5] soft-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={rpost.image} alt={rpost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#D9A5B3] font-poppins font-medium">{rpost.category}</span>
                  <h4 className="font-playfair font-bold text-[#2B2B2B] text-sm mt-1 mb-2 line-clamp-2 group-hover:text-[#D9A5B3] transition-colors">
                    {rpost.title}
                  </h4>
                  <Link to={`/blog/${rpost.id}`} className="text-xs text-[#D9A5B3] font-poppins font-semibold hover:underline">
                    Baca →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
