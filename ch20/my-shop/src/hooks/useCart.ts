import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart() {
    const ctx = useContext(CartContext)
    if(!ctx) {
        throw new Error(`userCart는 CartProvider 안에서만 사용할 수 있습니다`)
    }
    return ctx
}