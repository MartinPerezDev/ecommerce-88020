const products = [
  {
    id: 1,
    name: "Teclado",
    description: "Teclado 60%",
    stock: 5,
    image: "/image/k65_mini.avif",
    price: 540,
    category: "teclados"
  },
  {
    id: 2,
    name: "Teclado plus",
    description: "Teclado 60% plus",
    stock: 2,
    image: "/image/k65_plus.avif",
    price: 310,
    category: "teclados"
  },
  {
    id: 3,
    name: "Mouse",
    description: "Mouse Negro y Amarillo",
    stock: 6,
    image: "/image/harpoon.avif",
    price: 300,
    category: "mouse"
  },
  {
    id: 4,
    name: "Mouse",
    description: "Mouse Pro",
    stock: 16,
    image: "/image/m75.avif",
    price: 200,
    category: "mouse"
  },
  {
    id: 5,
    name: "Auriculares xt01",
    description: "Auriculares Negros",
    stock: 7,
    image: "/image/virtuoso_xt_01.avif",
    price: 260,
    category: "auriculares"
  },
  {
    id: 6,
    name: "Auriculares Pro",
    description: "Auriculares Blancos",
    stock: 8,
    image: "/image/virtuoso_pro.avif",
    price: 450,
    category: "auriculares"
  }
]

const getProducts = () => {
  return new Promise( (resolve) => {

    setTimeout(()=> {
      resolve(products)
    }, 3000)

  })
}

export default getProducts;