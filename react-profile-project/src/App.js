import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnggotaSatu from './pages/AnggotaSatu';
import AnggotaDua from './pages/AnggotaDua';
import AnggotaTiga from './pages/AnggotaTiga';

// ============================================================
// PETUNJUK PENGGUNAAN:
// 1. Ganti nama file dan komponen sesuai nama anggota tim
// 2. Ganti path URL sesuai nama-anggota (gunakan huruf kecil dengan tanda hubung)
// 3. Setiap anggota edit file profil masing-masing di folder pages/
// ============================================================

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Universitas Brawijaya
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-800 text-white mb-4 leading-tight tracking-tight">
          Team Profile
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          Project ReactJS dengan GitHub — Tugas Kolaborasi Tim
        </p>

        {/* Team member cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link to="/anggota-satu" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
              A
            </div>
            <p className="text-white font-semibold text-sm">Anggota Satu</p>
            <p className="text-slate-400 text-xs mt-1">/anggota-satu</p>
          </Link>

          <Link to="/anggota-dua" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
              B
            </div>
            <p className="text-white font-semibold text-sm">Anggota Dua</p>
            <p className="text-slate-400 text-xs mt-1">/anggota-dua</p>
          </Link>

          <Link to="/anggota-tiga" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
              C
            </div>
            <p className="text-white font-semibold text-sm">Anggota Tiga</p>
            <p className="text-slate-400 text-xs mt-1">/anggota-tiga</p>
          </Link>
        </div>

        <p className="text-slate-500 text-sm">
          Klik kartu di atas untuk melihat halaman profil masing-masing anggota
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
          GANTI URL DAN KOMPONEN SESUAI NAMA ANGGOTA:
          Contoh: path="/rifqi-ardhian" element={<RifqiArdhian />}
        */}
        <Route path="/anggota-satu" element={<AnggotaSatu />} />
        <Route path="/anggota-dua" element={<AnggotaDua />} />
        <Route path="/anggota-tiga" element={<AnggotaTiga />} />
      </Routes>
    </Router>
  );
}

export default App;
