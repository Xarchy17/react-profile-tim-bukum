import React from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// INSTRUKSI UNTUK ANGGOTA DUA:
// Ganti semua data di bawah ini dengan informasi kalian sendiri!
// ============================================================

const profileData = {
  namaLengkap: "Nama Lengkap Anggota Dua",
  kelas: "Kelas A / TI-01",
  jurusan: "Teknik Informatika",
  prodi: "S1 Teknik Informatika",
  domisili: "Malang, Jawa Timur",
  fotoProfil: null,
  inisial: "AD",
  warnaTema: "from-indigo-500 to-purple-500",
  tentangDiri: `
    Halo! Perkenalkan, saya adalah mahasiswa aktif di Universitas Brawijaya yang sedang 
    menempuh studi di bidang Teknik Informatika. Saya memiliki ketertarikan besar dalam 
    pengembangan perangkat lunak, khususnya di bidang web development dan mobile development.

    Selama masa perkuliahan, saya telah mempelajari berbagai bahasa pemrograman seperti 
    JavaScript, Python, dan Java. Saya juga aktif mengikuti berbagai workshop dan seminar 
    teknologi untuk terus mengembangkan kemampuan teknis saya.

    Di luar kegiatan akademik, saya senang berkolaborasi dalam proyek-proyek open source 
    dan aktif berkontribusi dalam komunitas developer lokal. Saya percaya bahwa belajar 
    bersama dan saling berbagi ilmu adalah kunci untuk berkembang di dunia teknologi yang 
    terus berubah dengan cepat ini.

    Ke depannya, saya berharap dapat berkarier di perusahaan teknologi terkemuka dan 
    berkontribusi dalam menciptakan solusi digital yang bermanfaat bagi masyarakat luas. 
    Saya juga memiliki minat di bidang kecerdasan buatan dan machine learning yang semakin 
    berkembang pesat dan membuka banyak peluang karir yang menarik di masa depan.
  `,
  skills: ["Vue.js", "Python", "Tailwind CSS", "Git & GitHub", "MySQL"],
  sosialMedia: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  }
};

export default function AnggotaDua() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali
          </Link>
          <span className="text-slate-500 text-xs">Universitas Brawijaya</span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Profile Card */}
        <div className="relative bg-gradient-to-br from-white/8 to-white/3 border border-white/10 rounded-3xl overflow-hidden mb-8">
          <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-r ${profileData.warnaTema} opacity-20`}></div>
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-900/50"></div>

          <div className="relative p-8 pt-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
              <div className="relative">
                {profileData.fotoProfil ? (
                  <img src={profileData.fotoProfil} alt={profileData.namaLengkap}
                    className="w-28 h-28 rounded-2xl object-cover border-4 border-slate-900 shadow-2xl" />
                ) : (
                  <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${profileData.warnaTema} flex items-center justify-center text-white text-4xl font-bold border-4 border-slate-900 shadow-2xl`}>
                    {profileData.inisial}
                  </div>
                )}
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 rounded-lg border-2 border-slate-900 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">{profileData.namaLengkap}</h1>
                <p className="text-slate-400 mt-1">{profileData.prodi} · {profileData.kelas}</p>
              </div>
              <div className="flex gap-2">
                {profileData.sosialMedia.github && (
                  <a href={profileData.sosialMedia.github} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-4 opacity-60">Informasi</h3>
              <div className="space-y-4">
                <InfoRow icon="🎓" label="Jurusan" value={profileData.jurusan} />
                <InfoRow icon="📚" label="Kelas" value={profileData.kelas} />
                <InfoRow icon="📍" label="Domisili" value={profileData.domisili} />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display text-white font-semibold text-sm uppercase tracking-widest mb-4 opacity-60">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, i) => (
                  <span key={i} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h2 className="font-display text-white text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 text-sm">✦</span>
                Tentang Diri
              </h2>
              <div className="space-y-4">
                {profileData.tentangDiri.trim().split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed text-sm">{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-slate-600 text-xs">
          Tugas Project Implementation · Universitas Brawijaya
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-base mt-0.5">{icon}</span>
      <div>
        <p className="text-slate-500 text-xs">{label}</p>
        <p className="text-slate-200 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
