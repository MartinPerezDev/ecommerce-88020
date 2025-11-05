import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";
//import data from "../data/products.json" assert { type: "json" };

const products = [
  {
    id: 1,
    name: "Teclado",
    description: "El teclado mecánico para juegos CORSAIR K65 RGB MINI 60% combina rendimiento de alto nivel con portabilidad, incluye la tecnología de hiperprocesamiento AXON, interruptores de teclas mecánicos CHERRY MX SPEED y una capacidad de personalización excepcional en un diseño compacto.",
    stock: 5,
    image: "/image/k65_mini.avif",
    price: 540,
    category: "teclados"
  },
  {
    id: 2,
    name: "Teclado plus",
    description: "Destaque entre la multitud con una habilidad superior y un diseño distintivo. El CORSAIR K65 PLUS WIRELESS es un teclado para juegos 75 % que maximiza el rendimiento y la personalidad.",
    stock: 2,
    image: "/image/k65_plus.avif",
    price: 310,
    category: "teclados"
  },
  {
    id: 3,
    name: "Mouse",
    description: "Esculpido para la victoria. Diseñado para ser el centro de atención. El M75 WIRELESS tiene un formato de ratón ambidiestro diseñado por expertos y una conectividad ultrarrápida a través de SLIPSTREAM WIRELESS y Bluetooth®.",
    stock: 6,
    image: "/image/harpoon.avif",
    price: 300,
    category: "mouse"
  },
  {
    id: 4,
    name: "Mouse",
    description: "El ratón para juegos CORSAIR HARPOON RGB WIRELESS le permite elegir cómo jugar, con la capacidad de conectarse fácilmente al PC a través de una tecnología ultrarrápida, la TECNOLOGÍA SLIPSTREAM CORSAIR WIRELESS en menos de 1 ms, Bluetooth o conexión por cable USB.",
    stock: 16,
    image: "/image/m75.avif",
    price: 200,
    category: "mouse"
  },
  {
    id: 5,
    name: "Auriculares xt01",
    description: "Los CORSAIR VIRTUOSO RGB Wireless XT ofrecen una experiencia de sonido de alta fidelidad y una comodidad continua gracias a las orejeras de espuma viscoelástica premium y una conectividad simultánea con la rapidísima tecnología SLIPSTREAM WIRELESS y Bluetooth.",
    stock: 7,
    image: "/image/virtuoso_xt_01.avif",
    price: 260,
    category: "auriculares"
  },
  {
    id: 6,
    name: "Auriculares Pro",
    description: "Prepare el escenario para sus mejores momentos de streaming y juegos. VIRTUOSO PRO produce un audio realista, con transductores de grafeno de última generación y un diseño de auricular con parte posterior abierta.",
    stock: 8,
    image: "/image/virtuoso_pro.avif",
    price: 450,
    category: "auriculares"
  }
]

const seedProducts = async() => {
  try {
    const productsRef = collection(db, "products");

    products.map( async( { id, ...dataProduct } ) => {
      await addDoc(productsRef, dataProduct);
    });

    console.log("Productos subidos correctamente!");
  } catch (error) {
    console.log(error);
  }
}

seedProducts();