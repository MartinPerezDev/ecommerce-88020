const getProducts = () => {
  return fetch("http://localhost:8080/api/products")
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    })
}

const getProductById = (productId) => {
  return fetch("http://localhost:8080/api/products/" + productId)
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    })
}

const addProduct = (newProduct) => {
  return fetch("http://localhost:8080/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    })
}

const setProductById = (productId, updates) => {
  return fetch("http://localhost:8080/api/products/" + productId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    })
}

const deleteProductById = (productId) => {
  return fetch("http://localhost:8080/api/products/" + productId, {
    method: "DELETE"
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    })
}

export { getProducts, getProductById, addProduct, setProductById, deleteProductById }