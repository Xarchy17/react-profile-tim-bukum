# 🎓 React Profile Project — Universitas Brawijaya

Project-based task: ReactJS profile pages dengan GitHub collaboration.

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm start
```

Buka: http://localhost:3000

## 📁 Struktur Project

```
src/
├── App.js              ← Routing semua halaman (edit di sini!)
├── index.js            ← Entry point
├── index.css           ← Global styles + Tailwind
└── pages/
    ├── AnggotaSatu.jsx  ← Template profil (rename sesuai nama)
    ├── AnggotaDua.jsx   ← Template profil (rename sesuai nama)
    └── AnggotaTiga.jsx  ← Template profil (rename sesuai nama)
```

## 👥 Cara Menambah Anggota Baru

1. Salin salah satu file di `src/pages/`
2. Rename sesuai nama anggota (contoh: `RifqiArdhian.jsx`)
3. Edit data profil di dalam file
4. Daftarkan route di `src/App.js`
5. Akses di: `http://localhost:3000/nama-anggota`

## 📘 Panduan Git

Lihat file **PANDUAN-GIT.md** untuk instruksi lengkap penggunaan Git dan GitHub.

## 🛠️ Tech Stack

- React 18
- React Router DOM v6
- Tailwind CSS v3
- Google Fonts (Plus Jakarta Sans + Syne)
