import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../lib/format'
import CartItemRow from '../components/CartItemRow'

export default function Cart() {
    const { items, totalPrice, clear }  = useCart();
    if(items.length === 0 ){
        return (
            <div className='container'>
                <p> 장바구니가 비어있습니다.</p>
                <Link to="/" className='btn btn-primary'> 쇼핑하러 가</Link>
            </div>
        )
    }

    return (
        <div>
            <div className='page-head'>
                <h1>장바구니</h1>
            </div>
            <div className='stack'>
                {items.map((it)=>(
                    <CartItemRow key={it.product.id} item={it}/>
                ))}
            </div>
            <div className='summary'>
                <div className='spread'>
                    <span>합계</span>
                    <span className='total'>{formatPrice(totalPrice)}</span>
                </div>
                <Link to="/checkout" className='btn btn-primary btn-block'>결재하기</Link>
                <button type='button' className='btn btn-ghost btn-sm' onClick={()=>clear()}></button>
            </div>
        </div>
    )
}