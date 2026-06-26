import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiLock, FiEye, FiEyeOff, FiBarChart2, FiCalendar, FiImage, FiStar, FiBookOpen, FiSettings, FiLogOut, FiBriefcase, FiUsers, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ADMIN_USER = { username: 'admin', password: 'anik2025' };

const sidebarItems = [
  { icon: FiBarChart2, label: 'Dashboard', key: 'dashboard' },
  { icon: FiCalendar, label: 'Kelola Booking', key: 'booking' },
  { icon: FiBriefcase, label: 'Kelola Layanan', key: 'services' },
  { icon: FiDollarSign, label: 'Kelola Harga', key: 'pricing' },
  { icon: FiImage, label: 'Kelola Portfolio', key: 'portfolio' },
  { icon: FiImage, label: 'Kelola Gallery', key: 'gallery' },
  { icon: FiStar, label: 'Kelola Testimoni', key: 'testimonials' },
  { icon: FiBookOpen, label: 'Kelola Blog', key: 'blog' },
  { icon: FiUsers, label: 'Kelola User', key: 'users' },
  { icon: FiSettings, label: 'Pengaturan', key: 'settings' },
];

const mockBookings = [
  { id: '001', name: 'Sari Dewi', service: 'Wedding Makeup', date: '2025-08-15', time: '07:00', status: 'confirmed', amount: 1800000 },
  { id: '002', name: 'Putri Maharani', service: 'Graduation Makeup', date: '2025-08-18', time: '09:00', status: 'pending', amount: 450000 },
  { id: '003', name: 'Nadya Pratiwi', service: 'Engagement Makeup', date: '2025-08-20', time: '10:00', status: 'confirmed', amount: 800000 },
  { id: '004', name: 'Rizka Amalia', service: 'Photoshoot Makeup', date: '2025-08-22', time: '11:00', status: 'pending', amount: 600000 },
  { id: '005', name: 'Tiara Wulandari', service: 'Hairdo & Styling', date: '2025-08-25', time: '08:00', status: 'cancelled', amount: 350000 },
];

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === ADMIN_USER.username && loginForm.password === ADMIN_USER.password) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Username atau password salah. Silakan coba lagi.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF6F9] via-white to-[#F9D6E5] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}
          className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl">💄</span>
            </div>
            <h1 className="font-playfair text-3xl font-bold text-[#2B2B2B]">Admin Panel</h1>
            <p className="text-gray-500 font-poppins text-sm mt-2">Anik Agung Makeup</p>
          </div>

          <div className="bg-white rounded-3xl p-8 soft-shadow border border-[#F9D6E5]">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="text" placeholder="Username" value={loginForm.username}
                  onChange={e => setLoginForm(p => ({ ...p, username: e.target.value }))}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#F9D6E5] font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" required />
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={loginForm.password}
                  onChange={e => setLoginForm(p => ({ ...p, password: e.target.value }))}
                  className="w-full pl-11 pr-11 py-3.5 rounded-2xl border border-[#F9D6E5] font-poppins text-sm focus:outline-none focus:border-[#E8A9C1]" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>

              {loginError && (
                <p className="text-red-400 text-sm font-poppins text-center bg-red-50 py-2 px-4 rounded-xl">{loginError}</p>
              )}

              <button type="submit" className="btn-primary w-full py-3.5 text-sm">
                Masuk ke Dashboard
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  const statsCards = [
    { icon: FiCalendar, label: 'Total Booking', value: '47', change: '+12%', color: 'from-[#F7C6D9] to-[#E8A9C1]' },
    { icon: FiDollarSign, label: 'Revenue Bulan Ini', value: 'Rp 18.5M', change: '+8%', color: 'from-[#D4AF37] to-[#F0D060]' },
    { icon: FiUsers, label: 'Total Klien', value: '512', change: '+5%', color: 'from-[#D9A5B3] to-[#C890A4]' },
    { icon: FiTrendingUp, label: 'Rating Average', value: '4.9★', change: '+0.1', color: 'from-[#F9D6E5] to-[#F7C6D9]' },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {statsCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${card.color} rounded-2xl p-5 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <card.icon size={20} className="opacity-80" />
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-poppins">{card.change}</span>
                  </div>
                  <p className="font-playfair text-2xl font-bold mb-1">{card.value}</p>
                  <p className="text-white/80 text-xs font-poppins">{card.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-3xl border border-[#F9D6E5] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-[#F9D6E5]">
                <h3 className="font-playfair text-lg font-bold text-[#2B2B2B]">Booking Terbaru</h3>
                <button className="text-xs text-[#D9A5B3] font-poppins hover:underline">Lihat Semua</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#FFF6F9]">
                      {['ID', 'Nama', 'Layanan', 'Tanggal', 'Jam', 'Status', 'Jumlah', 'Aksi'].map(h => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-poppins font-semibold text-gray-500">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockBookings.map((b, i) => (
                      <tr key={b.id} className={`border-t border-[#F9D6E5] ${i % 2 === 0 ? '' : 'bg-[#FFF6F9]/50'}`}>
                        <td className="px-4 py-3 text-xs font-poppins text-gray-500">#{b.id}</td>
                        <td className="px-4 py-3 text-sm font-poppins font-medium text-[#2B2B2B]">{b.name}</td>
                        <td className="px-4 py-3 text-xs font-poppins text-gray-600">{b.service}</td>
                        <td className="px-4 py-3 text-xs font-poppins text-gray-600">{b.date}</td>
                        <td className="px-4 py-3 text-xs font-poppins text-gray-600">{b.time}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-poppins font-medium ${
                            b.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                            b.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-400'
                          }`}>
                            {b.status === 'confirmed' ? 'Dikonfirmasi' : b.status === 'pending' ? 'Menunggu' : 'Dibatalkan'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs font-poppins font-semibold text-[#D4AF37]">
                          Rp {b.amount.toLocaleString('id-ID')}
                        </td>
                        <td className="px-4 py-3">
                          <a href={`https://wa.me/62 813-3487-8454`} target="_blank" rel="noopener noreferrer"
                            className="text-[#25D366] hover:text-green-600 transition-colors">
                            <FaWhatsapp size={16} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'booking':
        return (
          <div className="bg-white rounded-3xl border border-[#F9D6E5] p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-playfair text-xl font-bold text-[#2B2B2B]">Kelola Booking</h3>
              <button className="btn-primary text-sm py-2 px-4">+ Tambah Booking</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FFF6F9]">
                    {['ID', 'Nama Klien', 'Layanan', 'Tanggal', 'Status', 'Jumlah', 'Aksi'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-poppins font-semibold text-gray-500">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockBookings.map((b, i) => (
                    <tr key={b.id} className={`border-t border-[#F9D6E5] ${i % 2 === 0 ? '' : 'bg-[#FFF6F9]/50'}`}>
                      <td className="px-4 py-3 text-xs font-poppins text-gray-500">#{b.id}</td>
                      <td className="px-4 py-3 text-sm font-poppins font-medium text-[#2B2B2B]">{b.name}</td>
                      <td className="px-4 py-3 text-xs font-poppins text-gray-600">{b.service}</td>
                      <td className="px-4 py-3 text-xs font-poppins text-gray-600">{b.date} {b.time}</td>
                      <td className="px-4 py-3">
                        <select className="text-xs font-poppins border border-[#F9D6E5] rounded-xl px-2 py-1 focus:outline-none">
                          <option value="pending">Menunggu</option>
                          <option value="confirmed">Dikonfirmasi</option>
                          <option value="cancelled">Dibatalkan</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 text-xs font-poppins font-semibold text-[#D4AF37]">Rp {b.amount.toLocaleString('id-ID')}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="text-xs text-[#D9A5B3] hover:underline font-poppins">Edit</button>
                          <button className="text-xs text-red-400 hover:underline font-poppins">Hapus</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-3xl border border-[#F9D6E5] p-10 text-center">
            <div className="text-5xl mb-4">🚧</div>
            <h3 className="font-playfair text-2xl font-bold text-[#2B2B2B] mb-3">
              {sidebarItems.find(s => s.key === activeMenu)?.label}
            </h3>
            <p className="text-gray-500 font-poppins text-sm">
              Halaman ini sedang dalam pengembangan. Fitur lengkap akan segera tersedia.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6F9] flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
            className="fixed lg:relative z-40 w-64 h-screen bg-[#2B2B2B] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center">
                  <span className="text-base">💄</span>
                </div>
                <div>
                  <span className="font-playfair font-bold text-white text-sm">Aurelia</span>
                  <span className="gold-text font-playfair font-bold text-sm"> Beauty</span>
                </div>
              </div>
            </div>

            <nav className="flex-1 py-4 px-3 overflow-y-auto">
              {sidebarItems.map(({ icon: Icon, label, key }) => (
                <button key={key} onClick={() => setActiveMenu(key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl mb-1 text-sm font-poppins transition-all ${
                    activeMenu === key
                      ? 'bg-gradient-to-r from-[#E8A9C1] to-[#D9A5B3] text-white'
                      : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}>
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </nav>

            <div className="p-4 border-t border-white/10">
              <button onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-poppins text-red-400 hover:bg-red-400/10 transition-all">
                <FiLogOut size={16} />
                Logout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b border-[#F9D6E5] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-[#D9A5B3] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="font-playfair text-lg font-bold text-[#2B2B2B]">
              {sidebarItems.find(s => s.key === activeMenu)?.label || 'Dashboard'}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F7C6D9] to-[#D9A5B3] flex items-center justify-center">
              <FiUser className="text-white" size={16} />
            </div>
            <span className="text-sm font-poppins text-gray-600 hidden sm:block">Admin</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeMenu} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
