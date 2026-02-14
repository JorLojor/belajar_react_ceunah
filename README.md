# Belajar React untuk Pemula

Materi pembelajaran frontend menggunakan **React** dengan pendekatan praktik langsung. Cocok untuk kamu yang baru pertama kali belajar React dan ingin langsung ngoding tanpa kebanyakan teori.

Di akhir materi ini, kamu bakal bikin **mini project aplikasi catatan sederhana** yang punya fitur routing dan penyimpanan data di browser.

---

## 🛠️ Tools & Teknologi

| Teknologi | Fungsi |
|---|---|
| **React** | Library untuk membangun UI |
| **Vite** | Build tool yang super cepat untuk project React |
| **Tailwind CSS** | Framework CSS utility-first untuk styling |
| **React Router** | Library untuk navigasi antar halaman |
| **Local Storage** | Penyimpanan data di browser |

---

## Persiapan Environment

### 1. Install Node.js

Download dan install Node.js dari situs resminya:

👉 [https://nodejs.org](https://nodejs.org) — pilih versi **LTS** (Long Term Support).

### 2. Cek Versi Node & npm

Setelah install, buka terminal dan jalankan:

```bash
node -v
```

```bash
npm -v
```

Pastikan Node.js minimal versi **18** dan npm sudah terinstall. Kalau keduanya muncul versi, berarti kamu siap lanjut!

---

## ⚡ Membuat Project React dengan Vite

### 1. Buat Project Baru

Buka terminal, lalu jalankan:

```bash
npm create vite@latest nama-project -- --template react
```
``` nama-project ganti pake nama project kamu

### 2. Masuk ke Folder Project

```bash
cd catatan-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses `http://localhost:5173` — kalau muncul halaman default React, berarti berhasil! 🎉

---

## 🎨 Setup Tailwind CSS

### 1. Install Tailwind CSS & Plugin Vite

```bash
npm install -D tailwindcss @tailwindcss/vite
```

### 2. Konfigurasi Vite

Buka file `vite.config.js`, lalu ubah isinya jadi seperti ini:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 3. Tambahkan Import Tailwind di CSS

Buka file `src/index.css`, hapus semua isinya, lalu ganti dengan:

```css
@import "tailwindcss";
```

### 4. Coba Tailwind CSS

Buka file `src/App.jsx`, ganti isinya dengan:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Anjay pake Tailwind CSS
      </h1>
    </div>
  );
}

export default App;
```

Simpan, lalu cek browser. Kalau tulisannya biru dan bold, Tailwind sudah jalan! 

---

## Setup React Router

### 1. Install React Router

```bash
npm install react-router-dom
```

### 2. Konfigurasi Router

Buka file `src/main.jsx`, ubah isinya jadi:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### 3. Buat Halaman Home & About

Buat folder `src/pages/`, lalu buat dua file:

**`src/pages/Home.jsx`**

```jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">🏠 Halaman Home</h1>
      <p className="text-gray-600 mb-4">Selamat datang di aplikasi catatan!</p>
      <Link
        to="/about"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Ke halaman About →
      </Link>
    </div>
  );
}

export default Home;
```

**`src/pages/About.jsx`**

```jsx
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4"> Halaman About</h1>
      <p className="text-gray-600 mb-4">
        Aplikasi ini dibuat untuk belajar React, React Router, dan Local
        Storage.
      </p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        ← Kembali ke Home
      </Link>
    </div>
  );
}

export default About;
```

### 4. Daftarkan Route di App.jsx

Buka `src/App.jsx`, ubah isinya:

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
```

Coba klik link di halaman — kalau berpindah halaman tanpa reload, routing sudah berhasil! 🎉

---

## Penggunaan Local Storage

Local Storage itu semacam "gudang kecil" di browser buat nyimpen data. Data yang disimpan **nggak hilang** walaupun browser ditutup. Cocok banget buat aplikasi sederhana yang belum pakai database.

### Menyimpan Data

```js
// Simpan array ke local storage
const catatan = [
  { id: 1, judul: "Belajar React", isi: "React itu seru!" },
  { id: 2, judul: "Belajar Tailwind", isi: "Styling jadi gampang." },
];

localStorage.setItem("catatan", JSON.stringify(catatan));
```

### Mengambil Data

```js
// Ambil data dari local storage
const data = localStorage.getItem("catatan");
const catatan = data ? JSON.parse(data) : [];

console.log(catatan);
```

### Menghapus Data

```js
// Hapus satu item
localStorage.removeItem("catatan");

// Hapus semua data
localStorage.clear();
```

> ** Tips:** Selalu gunakan `JSON.stringify()` saat menyimpan dan `JSON.parse()` saat mengambil data, karena Local Storage hanya bisa menyimpan data dalam format string.

---

## Mini Project: Aplikasi Catatan Sederhana

Sekarang saatnya gabungkan semua yang sudah dipelajari! Kita akan bikin aplikasi catatan dengan fitur:

- ✅ Tambah catatan baru
- ✅ Hapus catatan
- ✅ Navigasi antar halaman (Home & About)
- ✅ Data tersimpan di Local Storage

### Buat Halaman Catatan

Buat file **`src/pages/Home.jsx`** dan ganti isinya dengan kode berikut:

```jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [catatan, setCatatan] = useState([]);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  // Ambil data dari local storage saat pertama kali render
  useEffect(() => {
    const data = localStorage.getItem("catatan");
    if (data) {
      setCatatan(JSON.parse(data));
    }
  }, []);

  // Simpan ke local storage setiap kali data catatan berubah
  useEffect(() => {
    localStorage.setItem("catatan", JSON.stringify(catatan));
  }, [catatan]);

  // Fungsi tambah catatan
  const tambahCatatan = () => {
    if (!judul || !isi) return alert("Judul dan isi harus diisi!");

    const catatanBaru = {
      id: Date.now(),
      judul,
      isi,
    };

    setCatatan([...catatan, catatanBaru]);
    setJudul("");
    setIsi("");
  };

  // Fungsi hapus catatan
  const hapusCatatan = (id) => {
    const filtered = catatan.filter((item) => item.id !== id);
    setCatatan(filtered);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Navigasi */}
      <nav className="flex gap-4 mb-8">
        <Link to="/" className="text-blue-600 font-semibold">
          Home
        </Link>
        <Link to="/about" className="text-gray-500 hover:text-blue-600">
          About
        </Link>
      </nav>

      <h1 className="text-3xl font-bold mb-6">📝 Aplikasi Catatan</h1>

      {/* Form Input */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Judul catatan..."
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Isi catatan..."
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={tambahCatatan}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          + Tambah Catatan
        </button>
      </div>

      {/* Daftar Catatan */}
      {catatan.length === 0 ? (
        <p className="text-gray-400 text-center">
          Belum ada catatan. Yuk tambah! ✨
        </p>
      ) : (
        <div className="space-y-4">
          {catatan.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-start"
            >
              <div>
                <h3 className="font-bold text-lg">{item.judul}</h3>
                <p className="text-gray-600 mt-1">{item.isi}</p>
              </div>
              <button
                onClick={() => hapusCatatan(item.id)}
                className="text-red-500 hover:text-red-700 font-bold text-xl ml-4 cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
```

---

## 📁 Struktur Folder Project

```
catatan-app/
├── node_modules/
├── public/
├── src/
│   ├── pages/
│   │   ├── Home.jsx        # Halaman utama + fitur catatan
│   │   └── About.jsx       # Halaman about
│   ├── App.jsx             # Konfigurasi routing
│   ├── main.jsx            # Entry point + BrowserRouter
│   └── index.css           # Import Tailwind CSS
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Perintah untuk Menjalankan Project

```bash
# Masuk ke folder project
cd catatan-app

# Install semua dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

---

## Penutup

GOKILLL!  Kalau kamu sudah sampai di sini dan berhasil menjalankan mini project-nya, berarti kamu sudah paham dasar-dasar:

- Membuat project React dengan **Vite**
- Styling menggunakan **Tailwind CSS**
- Navigasi halaman dengan **React Router**
- Menyimpan & mengambil data dengan **Local Storage**

Dari sini, kamu bisa eksplorasi lebih jauh seperti menambahkan fitur edit catatan, pencarian catatan, atau bahkan menghubungkan aplikasi ke API/database sungguhan.

**Selamat belajar dan terus ngoding!** 
