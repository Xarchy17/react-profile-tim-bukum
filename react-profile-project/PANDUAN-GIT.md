# 📘 PANDUAN GIT & GITHUB UNTUK PEMULA
## Tugas Project Implementation — ReactJS + GitHub (Universitas Brawijaya)

---

## 🗂️ DAFTAR ISI
1. [Persiapan Awal](#1-persiapan-awal)
2. [Setup Project (Dilakukan Ketua Tim)](#2-setup-project-ketua-tim)
3. [Clone Repository (Dilakukan Setiap Anggota)](#3-clone-repository-anggota)
4. [Membuat Branch dan Mengerjakan Profil](#4-membuat-branch-dan-mengerjakan-profil)
5. [Push ke GitHub](#5-push-ke-github)
6. [Cara Kerja Tim (Sync)](#6-cara-kerja-tim)
7. [Perintah Git Penting](#7-perintah-git-penting)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. PERSIAPAN AWAL

### Install Git
Download dari: https://git-scm.com/downloads
Pilih sesuai OS (Windows/Mac/Linux), install seperti biasa.

### Cek apakah Git sudah terinstall
```
git --version
```
Hasilnya: `git version 2.x.x` → berarti sudah berhasil.

### Setup Identitas Git (Wajib sekali saja)
```
git config --global user.name "Nama Kamu"
git config --global user.email "email@gmail.com"
```
> ⚠️ Gunakan email yang sama dengan akun GitHub kamu!

### Install Node.js
Download dari: https://nodejs.org (pilih versi LTS)
Cek: `node --version` dan `npm --version`

---

## 2. SETUP PROJECT (KETUA TIM)

> Langkah ini hanya dilakukan oleh **1 orang** (ketua tim) saja!

### A. Buat Repository di GitHub
1. Buka https://github.com
2. Klik tombol **"New"** (hijau) di sidebar kiri
3. Isi:
   - Repository name: `react-profile-tim-X` (ganti X dengan nama tim)
   - Description: "Project ReactJS Tugas Universitas Brawijaya"
   - Pilih: **Public**
   - Jangan centang apapun (README, .gitignore, license)
4. Klik **"Create repository"**

### B. Upload Project ke GitHub
Buka Terminal/Command Prompt, arahkan ke folder project:

```
# Masuk ke folder project yang sudah di-download/extract
cd react-profile-project

# Inisialisasi Git di folder ini
git init

# Tambahkan semua file ke staging
git add .

# Buat commit pertama
git commit -m "Initial commit: setup project ReactJS"

# Sambungkan ke repository GitHub (ganti URL sesuai repo kamu)
git remote add origin https://github.com/USERNAME/react-profile-tim-X.git

# Rename branch ke main
git branch -M main

# Push ke GitHub
git push -u origin main
```

### C. Invite Anggota Tim
1. Di halaman repository, klik **Settings**
2. Klik **Collaborators** (di sidebar kiri)
3. Klik **"Add people"**
4. Masukkan username GitHub masing-masing anggota
5. Anggota akan menerima email undangan → harus diterima dulu

---

## 3. CLONE REPOSITORY (ANGGOTA)

> Langkah ini dilakukan oleh **setiap anggota** (selain yang sudah setup).

### A. Copy URL Repository
Di halaman GitHub repository → klik tombol **"Code"** (hijau) → copy URL HTTPS

### B. Clone ke Komputer
```
# Pilih folder tempat menyimpan project (contoh: Desktop)
cd Desktop

# Clone repository
git clone https://github.com/USERNAME/react-profile-tim-X.git

# Masuk ke folder project
cd react-profile-tim-X
```

### C. Install Dependencies
```
npm install
```
> Ini akan menginstall semua package yang dibutuhkan (React, Tailwind, dll)
> Proses ini membutuhkan internet dan mungkin 2-5 menit.

### D. Coba Jalankan Project
```
npm start
```
> Browser akan otomatis membuka http://localhost:3000

---

## 4. MEMBUAT BRANCH DAN MENGERJAKAN PROFIL

> Setiap anggota harus mengerjakan ini di branch masing-masing!

### A. Pastikan Ada di Branch Main dan Up-to-Date
```
git checkout main
git pull origin main
```

### B. Buat Branch Baru (dengan nama kamu)
```
# Format: dev/nama-kamu (huruf kecil, tanda hubung)
git checkout -b dev/nama-kamu

# Contoh:
# git checkout -b dev/rifqi-ardhian
# git checkout -b dev/surya-rafliansyah
# git checkout -b dev/ahmad-akbar
```

### C. Buat File Profil Kamu

**Rename file yang sudah ada:**
- Salin `src/pages/AnggotaSatu.jsx` → `src/pages/NamaKamu.jsx`
- Contoh: `src/pages/RifqiArdhian.jsx`

**Daftarkan di App.js:**
Buka `src/App.js`, tambahkan:
```javascript
// Di bagian atas (import)
import RifqiArdhian from './pages/RifqiArdhian';

// Di bagian Routes
<Route path="/rifqi-ardhian" element={<RifqiArdhian />} />
```

**Edit data profil di file kamu:**
Buka file profil kamu (misal `RifqiArdhian.jsx`) dan ganti:
```javascript
const profileData = {
  namaLengkap: "Rifqi Ardhian",         // ← Ganti dengan nama kamu
  kelas: "Kelas A / TI-01",              // ← Ganti dengan kelas kamu
  jurusan: "Teknik Informatika",          // ← Ganti sesuai jurusan
  prodi: "S1 Teknik Informatika",         // ← Ganti sesuai prodi
  domisili: "Malang, Jawa Timur",        // ← Ganti dengan domisili kamu
  fotoProfil: null,                       // ← Isi URL foto atau biarkan null
  inisial: "RA",                          // ← Inisial nama kamu
  tentangDiri: `...`,                     // ← Tulis tentang diri min 100 kata
  skills: ["React.js", "..."],           // ← Skills kamu
};
```

### D. Test di Browser
```
npm start
```
Buka: `http://localhost:3000/nama-kamu`

---

## 5. PUSH KE GITHUB

Setelah selesai mengerjakan profil, push ke GitHub:

```
# 1. Cek file apa saja yang berubah
git status

# 2. Tambahkan semua perubahan ke staging
git add .

# 3. Buat commit dengan pesan yang jelas
git commit -m "feat: tambah halaman profil Rifqi Ardhian"

# 4. Push branch kamu ke GitHub
git push origin dev/nama-kamu
# Contoh: git push origin dev/rifqi-ardhian
```

### Cek di GitHub
Buka repository di GitHub → kamu akan melihat branch baru muncul!

---

## 6. CARA KERJA TIM

### Ketika Anggota Lain Sudah Push
```
# Pindah ke main dulu
git checkout main

# Ambil update terbaru dari GitHub
git pull origin main

# Kembali ke branch kamu
git checkout dev/nama-kamu

# Gabungkan update main ke branch kamu
git merge main
```

### Merge Branch ke Main (Dilakukan Ketua Tim)
Di GitHub:
1. Klik **"Pull requests"**
2. Klik **"New pull request"**
3. Pilih: base = `main`, compare = `dev/nama-anggota`
4. Klik **"Create pull request"**
5. Klik **"Merge pull request"** → **"Confirm merge"**

Ulangi untuk setiap branch anggota.

---

## 7. PERINTAH GIT PENTING

| Perintah | Fungsi |
|----------|--------|
| `git init` | Inisialisasi repository baru |
| `git clone <url>` | Download repository dari GitHub |
| `git status` | Lihat file yang berubah |
| `git add .` | Tambahkan semua perubahan ke staging |
| `git add <file>` | Tambahkan file tertentu ke staging |
| `git commit -m "pesan"` | Simpan perubahan dengan pesan |
| `git push origin <branch>` | Upload ke GitHub |
| `git pull origin <branch>` | Download update dari GitHub |
| `git checkout <branch>` | Pindah ke branch lain |
| `git checkout -b <branch>` | Buat branch baru dan langsung pindah |
| `git branch` | Lihat semua branch lokal |
| `git branch -a` | Lihat semua branch (lokal + remote) |
| `git merge <branch>` | Gabungkan branch |
| `git log --oneline` | Lihat riwayat commit singkat |

---

## 8. TROUBLESHOOTING

### ❌ Error: "Please tell me who you are"
```
git config --global user.email "email@gmail.com"
git config --global user.name "Nama Kamu"
```

### ❌ Error: "Repository not found" atau "Authentication failed"
- Pastikan kamu sudah login ke GitHub di browser
- Gunakan GitHub CLI atau Personal Access Token:
  1. Buka GitHub → Settings → Developer settings → Personal access tokens
  2. Klik "Generate new token (classic)"
  3. Centang: repo, workflow
  4. Copy token, gunakan sebagai password saat diminta

### ❌ Error: "src refspec main does not match any"
```
git add .
git commit -m "first commit"
git push -u origin main
```

### ❌ Error: "Failed to merge"  / Conflict
Buka file yang conflict, cari tanda:
```
<<<<<<< HEAD
(kode kamu)
=======
(kode orang lain)
>>>>>>> branch-name
```
Pilih/gabungkan yang benar, hapus tanda `<<<<`, `====`, `>>>>`, lalu:
```
git add .
git commit -m "fix: resolve merge conflict"
```

### ❌ Error: "npm install fails"
```
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

---

## 📋 CHECKLIST TUGAS

**Ketua Tim:**
- [ ] Buat repository GitHub
- [ ] Upload project awal ke main
- [ ] Invite semua anggota
- [ ] Buat halaman profil sendiri
- [ ] Merge semua branch anggota ke main

**Setiap Anggota:**
- [ ] Terima undangan GitHub
- [ ] Clone repository
- [ ] Buat branch `dev/nama-kamu`
- [ ] Buat file halaman profil dengan nama file unik
- [ ] Isi data profil (nama, kelas, jurusan, domisili, foto, tentang diri min 100 kata)
- [ ] Daftarkan route di App.js
- [ ] Test profil bisa diakses di browser
- [ ] Push branch ke GitHub
- [ ] Pastikan branch terlihat di GitHub repository

---

*Panduan ini dibuat untuk membantu pengerjaan Tugas Project Implementation*  
*Universitas Brawijaya — Merdeka Belajar*
