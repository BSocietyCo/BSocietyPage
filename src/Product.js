import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componente individual de acordeón
function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-white font-medium text-base md:text-lg hover:text-gray-300 transition"
      >
        {title}
        <span className="text-gray-400">{isOpen ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-sm md:text-base text-gray-400 leading-relaxed pb-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sección completa de acordeones
export function ProductInfoAccordion() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-2">
      <AccordionItem title="¿Qué representa?">
        <p>No es solo un dije. Es una clave silenciosa. Una forma de decir “soy parte” sin tener que explicarlo.</p>
        <p className="mt-2">Hecha en plata 925, esta pieza simboliza algo que no todos pueden ver… Pero los que lo reconocen, lo saben al instante.</p>
        <p className="italic mt-2 text-gray-300">Made to be seen by the unseen.</p>
      </AccordionItem>

      <AccordionItem title="¿Por qué es limitado?">
        <p>Porque la sociedad no es para todos. Solo se fabricaron 50 unidades numeradas. Cada una representa un acto de pertenencia para los primeros que se atreven a usar la marca sin decir una palabra.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>No hay reposiciones.</li>
          <li>No hay segundas ediciones.</li>
          <li>Esto es solo para quienes estuvieron desde el principio.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="¿Qué incluye el pack?">
        <ul className="list-disc list-inside space-y-1">
          <li>Cadena de plata 925 certificada, con dije grabado</li>
          <li>Caja rígida negra premium con sello de B Society</li>
          <li>Tarjeta negra de membresía, numerada (#__/50)</li>
          <li>Frase secreta impresa en el interior del empaque</li>
          <li>Envoltura minimalista y protegida para envío</li>
        </ul>
        <p className="mt-2">Cada pack está diseñado para sentirse como un ritual de entrada, no una compra.</p>
      </AccordionItem>

      <AccordionItem title="Garantía de satisfacción">
        <p>Tenés 14 días desde la entrega para devolver el producto si no sentís que te representa.</p>
        <p className="mt-1">Sin preguntas. Sin vueltas.</p>
        <p className="mt-2 italic text-gray-300">Porque si no es para vos… simplemente no es para vos. Y eso también está bien.</p>
      </AccordionItem>

      <AccordionItem title="¿Hacen envíos internacionales?">
        <p>Sí. Enviamos a todo el mundo. Cada pedido se despacha en caja protegida con seguimiento online.</p>
        <p className="mt-1">Los tiempos pueden variar según tu país, pero la sociedad no tiene fronteras.</p>
      </AccordionItem>
    </section>
  );
}