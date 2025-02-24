import products from "../../data"
console.log(products)

export default function ProductList() {

  const productList = products.map(product => {
      return (
          <div key={product.id} className="product-item">
            <img src={product.image} alt="Chicken image" />
            <div className="product-infos">
              <h1>{product.name}</h1>
              <p>CFA {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </div>
      )
  })
  return (
    <div className="product-list">
        {productList}
    </div>
  )
}

