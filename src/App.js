import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import BCapImage from './img/BCap.PNG';

export default function BSocietyLanding() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWithOffset = (id, offset = 100) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    animate(window.scrollY, y, {
      duration: 0.8,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  if (loading) {
    return (
      <div className="bg-black h-screen w-screen flex items-center justify-center">
        <motion.span
          className="text-[#f5f5f5] text-4xl tracking-widest font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          𝕭
        </motion.span>
      </div>
    );
  }

  return (
    <div className="bg-black text-[#f5f5f5] font-sans overflow-x-hidden">
      {/* Header */}
      <motion.header
        className="w-full absolute top-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-black"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-[#f5f5f5] text-2xl font-light">𝕭</div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          {["¿Qué es B Society?", "Producto", "Comprar"].map((item, idx) => {
            const id = idx === 0 ? "about" : idx === 1 ? "product" : "product";
            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-white transition-colors duration-300"
                onClick={() => scrollToWithOffset(id, 80)}
              >
                {item}
              </motion.button>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#f5f5f5]">
            ☰
          </button>
        </div>
      </motion.header>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 w-full bg-black text-center py-6 z-40"
        >
          {["¿Qué es B Society?", "Producto", "Comprar"].map((item, idx) => {
            const id = idx === 0 ? "about" : idx === 1 ? "product" : "product";
            return (
              <div key={idx} className="py-2">
                <button
                  className="text-gray-400 hover:text-white uppercase tracking-widest text-sm"
                  onClick={() => {
                    scrollToWithOffset(id, 80);
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-wide">
          La B no se explica. <br /> Se lleva.
        </h1>
        <button
          onClick={() => scrollToWithOffset("product", 80)}
          className="mt-10 px-8 py-3 border border-gray-500 hover:bg-[#1a1a1a] transition duration-300 uppercase tracking-widest text-sm"
        >
          Explorar colección
        </button>
      </motion.section>

      {/* ¿Qué es B Society? */}
      <motion.section
        id="about"
        className="px-6 py-16 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl mb-6 font-light">¿Qué es B Society?</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          No es solo ropa. Es una señal. Una declaración silenciosa de quienes entienden que la verdadera identidad no se grita, se transmite.
        </p>
      </motion.section>

      {/* Diferenciadores */}
      <motion.section
        className="px-6 py-16 max-w-4xl mx-auto grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {["Minimalismo que habla por sí solo.", "Una comunidad que no se muestra, pero se siente.", "Garantía total. Sin preguntas.", "Estilo premium, sin excesos."].map((text, idx) => (
          <div
            key={idx}
            className="border border-gray-700 p-6 hover:bg-[#111] transition duration-300"
          >
            <p className="text-gray-300 text-base">{text}</p>
          </div>
        ))}
      </motion.section>

      {/* Producto Destacado */}
      <motion.section
        id="product"
        className="relative px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Texto + CTA */}
        <div className="text-center md:text-left z-10">
          <span className="uppercase text-xs tracking-widest text-gray-500 mb-2 inline-block">
            Producto Exclusivo
          </span>
          <h2 className="text-3xl md:text-4xl mb-4 font-light">UNSEEN Blackout</h2>
          <p className="text-gray-500 mb-6 text-lg leading-relaxed">
            La primera señal visible de una sociedad invisible. <br />
            100% algodón orgánico. Edición limitada. Hecha para durar y representar.
          </p>
          <button
            className="mt-4 px-8 py-3 border border-gray-500 hover:bg-[#1a1a1a] transition duration-300 uppercase tracking-widest text-sm"
            onClick={() => alert("Aquí irá la integración con Mercado Pago")}
          >
            Comprar ahora
          </button>
        </div>

        {/* Imagen con efecto + glass panel */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/5 border border-white/10"
          >
            <div className="aspect-square w-full max-w-md mx-auto overflow-hidden">
              <img
                src={BCapImage}
                alt="Gorra UNSEEN Blackout"
                className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Fondo degradado fijo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black z-0"
          style={{ backgroundAttachment: "fixed" }}
        />
      </motion.section>

      {/* Cierre emocional */}
      <motion.section
        className="px-6 py-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-2xl md:text-3xl italic text-gray-400">
          No lo entenderán. Hasta que la vean.
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 px-6 text-sm text-gray-500 text-center">
        <p>14 días de garantía sin preguntas.</p>
        <p className="mt-2">Política clara. Diseño limpio. Pertenencia garantizada.</p>
        <p className="mt-2">© {new Date().getFullYear()} B Society</p>
      </footer>
    </div>
  );
}