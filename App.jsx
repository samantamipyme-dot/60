import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import products from "./data/products.json";

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <section id="inicio" className="mb-12">
          <div className="rounded-lg bg-gradient-to-r from-rose-50 to-amber-50 p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold text-rose-700">
                  Mioyne Samanta
                </h1>
                <p className="mt-3 text-gray-700">
                  Productos seleccionados con cariño. Calidad, estilo y atención personalizada.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#productos"
                    className="inline-block px-5 py-2 rounded-md bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition"
                  >
                    Ver Productos
                  </a>

                  {/* Botón de llamada (en hero) */}
                  <a
                    href="tel:+5352870470"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-rose-600 text-rose-600 font-semibold shadow hover:bg-rose-50 transition"
                    aria-label="Llamar a Mioyne Samanta"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a2 2 0 01-2 2H7.5A2.5 2.5 0 005 13.5V17a2 2 0 002 2h2" />
                    </svg>
                    Llamar
                  </a>
                </div>
              </div>
              <div className="w-48 h-48 md:w-60 md:h-60 bg-white rounded-xl shadow flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.postimg.cc/Mpb1dL3Q/1137b15d-0b68-4e0f-99b3-90c3f80ec88f.jpg"
                  alt="Mioyne Samanta"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Servicios</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold">Asesoría personalizada</h3>
              <p className="text-sm text-gray-600">Te ayudamos a elegir lo mejor según tu necesidad.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold">Envíos seguros</h3>
              <p className="text-sm text-gray-600">Empaque y envío con seguimiento.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold">Pedidos por encargo</h3>
              <p className="text-sm text-gray-600">Realizamos pedidos personalizados bajo demanda.</p>
            </div>
          </div>
        </section>

        <section id="productos" className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Productos</h2>
            <div className="flex items-center gap-2">
              <input
                type="search"
                placeholder="Buscar producto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                aria-label="Buscar productos"
              />
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section id="contacto" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">📞 <a href="tel:+5352870470" className="text-rose-600">+535 2870470</a></p>
            <p className="mt-2 text-sm text-gray-500">Llámanos para pedidos y consultas.</p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Mioyne Samanta. Todos los derechos reservados.
          </div>
          <div className="text-sm text-gray-600">
            Sitio diseñado por{" "}
            <a
              href="https://rodreyrj.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 font-semibold"
            >
              rodreyrj
            </a>
          </div>
        </div>
      </footer>

      {/* Botón flotante para llamar */}
      <a
        href="tel:+5352870470"
        className="fixed right-4 bottom-4 bg-rose-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition"
        aria-label="Llamar a Mioyne Samanta"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a2 2 0 01-2 2H7.5A2.5 2.5 0 005 13.5V17a2 2 0 002 2h2" />
        </svg>
      </a>
    </div>
  );
}