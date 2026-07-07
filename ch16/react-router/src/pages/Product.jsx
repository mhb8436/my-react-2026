import { Link } from "react-router-dom"
import { products } from "../data/products"

export default function Product() {
    return (
        <div>
            <ul>상품목록</ul>
            <p>카드를 누르면 상세 화면으로 넘어갑니다.</p>

            {products.map((product)=> (
                <Link key={product.id} to={`/products/${product.id}`} className="card">
                    <h3>{product.name}</h3>
                    <div className="price">{product.price}원</div>
                    <div className="muted">{product.category}</div>
                </Link>
            ))}
        </div>
    )
}