import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "./config/firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export default function Teaser({ onFinish }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function getTimeLeft() {
    const launchDate = new Date("2025-04-15T00:00:00");
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeLeft();
      if (!updated) {
        clearInterval(timer);
        onFinish();
      } else {
        setTimeLeft(updated);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      // 1. Guardar en Firestore
      await addDoc(collection(db, "emails"), { email });

      // 2. Enviar email de bienvenida al usuario
      await emailjs.send(
        "service_1qepry6",      // tu service ID
        "template_uckpc9j",     // tu template ID
        {
          to_email: email,
          user_name: "Usuario B Society", // si usas esta variable en la plantilla
        },
        "3qdgabYJqkgBk34kz"     // tu public key
      );

      setSubmitted(true);
    } catch (err) {
      console.error("❌ Error al guardar/enviar correo:", err);
      alert("Hubo un problema. Intenta de nuevo.");
    }
  };

  if (!timeLeft) return null;

  return (
    <div className="bg-black h-screen w-screen text-[#f5f5f5] flex flex-col items-center justify-center text-center font-sans px-6">
      <motion.h1
        className="text-2xl md:text-4xl italic text-gray-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Made to be seen by the unseen.
      </motion.h1>

      <motion.div
        className="text-4xl md:text-5xl font-light tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
      </motion.div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 items-center w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ingresa tu correo para avisarte"
            className="w-full px-4 py-2 bg-black border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-3 border border-gray-500 text-sm uppercase tracking-widest hover:bg-[#1a1a1a] transition duration-300"
          >
            Notifícame
          </button>
        </form>
      ) : (
        <p className="mt-8 text-green-400 text-sm">Gracias por registrarte. Revisa tu correo.</p>
      )}

      <motion.button
        onClick={onFinish}
        className="mt-10 px-6 py-3 border border-gray-500 text-sm uppercase tracking-widest hover:bg-[#1a1a1a] transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Entrar
      </motion.button>
    </div>
  );
}