import type { CartItem } from '../types'
import { formatPrice } from '../lib/format'
import { useCart } from '../hooks/useCart'

interface CartItemProps {
    item: CartItem
}

export default function CartItem({item} : CartItemProps) {
    const { setQuantity, removeItem } = useCart();
    const {product, quantity} = item;
    
    return (
        <div className='cart-row'>
            <img className='thumb' src={product.image}/>
            <div className='info'>
                <div className='p-name'>{product.name}</div>
                <div className='p-price'>{formatPrice(product.price)}</div>
            </div>
            <div className='qty'>
                <button 
                    type="button"
                    onClick={() => setQuantity(product.id, quantity - 1)}
                    disabled={quantity <= 1}
                > - </button>
                <span>{quantity}</span>
                <button
                    type="button"
                    onClick={() => setQuantity(product.id, quantity + 1)}
                    disabled={quantity >= product.stock}
                > + </button>
            </div>
            <div className='line-total'>{formatPrice(product.price * quantity)}</div>
            <button
                type='button'
                className='btn btn-ghost btn-sm'
                onClick={() => removeItem(product.id)}
            >
                삭제
            </button>
        </div>
    )
}