const products = [
  {
    id: 1,
    name: "Teclado",
    description: "Teclado 60%",
    stock: 5,
    image: "",
    price: 540
  },
  {
    id: 2,
    name: "Mouse",
    description: "Mouse Rojo",
    stock: 6,
    image: "",
    price: 300
  },
  {
    id: 3,
    name: "Auriculares",
    description: "Auriculares negros",
    stock: 16,
    image: "",
    price: 200
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