// http://localhost:5173/products/1 params 
import { useParams, useNavigate, Link } from "react-router-dom"
import { findProductById } from "../data/products"

export default function ProductDetail() {
    const { id } = useParams();  
    // path="/products/:id" 와 같이 이름이 들어갔을 경우 id 로 param을 가지고옴
    const navigate = useNavigate();

    const product = findProductById(id); // id String 
    if(!product) {
        return (
            <div>
                <h1>상품을 찾을 수 없습니다.</h1>
                <p className="muted">id가 {id}인 상품은 없습니다.</p>
                <Link to="/products"> 상품목록으로 이동 </Link>
            </div>
        )
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p className="muted">{product.category}</p>
            <p>{product.desc}</p>

            <br/>
            <button onClick={()=>navigate(-1)}>뒤로 가기</button>
            <button className="primary" onClick={()=>navigate("/products")}>상품목록으로</button>
        </div>
    )
}