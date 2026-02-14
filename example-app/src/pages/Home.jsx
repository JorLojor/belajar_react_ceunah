import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
     // Lazy initializer: langsung load data dari local storage pas state pertama kali dibuat
     const [catatan, setCatatan] = useState(() => {
          const data = localStorage.getItem("catatan");
          return data ? JSON.parse(data) : [];
     });
     const [judul, setJudul] = useState("");
     const [isi, setIsi] = useState("");

     // Auto-save ke local storage every time data catatan berubah
     useEffect(() => {
          localStorage.setItem("catatan", JSON.stringify(catatan));
     }, [catatan]);

     // Function buat tambah catatan
     const tambahCatatan = () => {
          if (!judul || !isi) return alert("Judul dan isi harus diisi ya!");

          const catatanBaru = {
               id: Date.now(),
               judul,
               isi,
          };

          setCatatan([...catatan, catatanBaru]);
          setJudul("");
          setIsi("");
     };

     // Function buat hapus catatan
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
                    <Link
                         to="/about"
                         className="text-gray-500 hover:text-blue-600">
                         About
                    </Link>
               </nav>

               <h1 className="text-3xl font-bold mb-6">Aplikasi Catatan</h1>

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
                         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                         + Tambah Catatan
                    </button>
               </div>

               {/* Daftar Catatan */}
               {catatan.length === 0 ? (
                    <p className="text-gray-400 text-center">
                         Belum ada catatan nih. Yuk tambahin!
                    </p>
               ) : (
                    <div className="space-y-4">
                         {catatan.map((item) => (
                              <div
                                   key={item.id}
                                   className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
                                   <div>
                                        <h3 className="font-bold text-lg">
                                             {item.judul}
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                             {item.isi}
                                        </p>
                                   </div>
                                   <button
                                        onClick={() => hapusCatatan(item.id)}
                                        className="text-red-500 hover:text-red-700 font-bold text-xl ml-4 cursor-pointer">
                                        x
                                   </button>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
}

export default Home;
