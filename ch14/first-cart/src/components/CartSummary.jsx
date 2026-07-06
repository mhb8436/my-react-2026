// 부모가 App.jsx 에서 넘겨준 카트 데이터를 작업 
// items 는 App.jsx 의 cart 데이터이고 [] 배열이에용
function CartSummary({items, onRemove, onChangeQuantity }) {
    
    return (
        <div>
            <ul>
                {items.map((item) => {
                    console.log(item);
                    return (
                    <li className="cart-row" key={item.id}>
                        <span className="name">
                            {item.name} x {item.quantity}
                        </span>
                        <span className="subtotal">
                            {item.price * item.quantity}
                        </span>
                        <button
                            className="ghost"
                            onClick={()=> onChangeQuantity(item.id, -1)}>-</button>
                        <button 
                            className="ghost"
                            onClick={()=> onChangeQuantity(item.id, 1)}>+</button>
                        <button className="danger" onClick={()=> onRemove(item.id)}>
                            빼기 
                        </button>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default CartSummary;