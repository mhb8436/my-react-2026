function ProductList({products, onAdd}) { // products from App.jsx 
    
    return (
        <div>
            <ul>
                {products.map((product) => {
                    return (
                        <li className="product-row" key={product.id}>
                            <span className="name">{product.name}</span>
                            <span className="price">{product.price}</span>
                            <button onClick={() => onAdd(product)}>장바구니 담기</button>
                        </li>
                    )   
                })
                }
            </ul>

        </div>
    )
}

export default ProductList;