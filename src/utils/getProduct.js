import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Obtiene todos los productos desde la colección "products" en Firestore.
 * @returns {Promise<Array>} Lista de productos o array vacío si hay error.
 */
export const getProduct = async () => {
    try {
      const productsRef = collection(db, "products");
      const snapshot = await getDocs(productsRef);
  
      if (snapshot.empty) {
        console.warn("📦 No se encontraron productos en Firestore.");
        return [];
      }
  
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return products;
    } catch (error) {
      console.error("❌ Error al obtener productos desde Firestore:", error);
      return [];
    }
  };