import {createContext, useReducer, type ReactNode } from 'react'
import type { CartItem, CartAction, Product } from '../types'

function cartReducer(state : CartItem[] , action: CartAction) :  CartItem[] {
    switch(action.type) {
        case 'ADD' : { // 카트에 제품 추가 
            // 1) 재고 유무를 조사합니다. 
            if(action.product.stock < 1) return state;
            // 2) 제품이 있는지 조사
            const exists = state.some((it) => it.product.id === action.product.id)
            if(exists){ // 수량만 업데이트 해야하겠지요
                return state.map((it) => 
                    it.product.id === action.product.id ?
                        {...it, quantity: Math.min(it.quantity + 1, it.product.stock)}
                    : it
                );
            }
            // 3) 기존 카트에 없는 제품이면 수량을 1로하고 카트에 해당 제품을 넣습니다. 
            return [...state, {product : action.product, quantity: 1}]
        }
        case 'REMOVE': { // 카트에서 제품 제거 
            return state.filter(
                (it) => it.product.id !== action.productId
            )
        }
        case 'SET_QUANTITY': { // 카트에서 동일 상품 수량업데이트
            return state.map(
                (it) => it.product.id === action.productId
                    ? {...it, quantity: Math.min(action.quantity, it.product.stock)}
                    : it
            );
        }
        case 'CLEAR' : { // 카트 비우기 
            return [];
        }
    }    
}

export interface CartContextValue {
    items : CartItem[];
    addItem: (product: Product) => void;
    removeItem : (productId: string) => void;
    setQuantity : (productId: string, quantity: number) => void;
    clear: () => void
    totalCount: number;
    totalPrice: number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children } : {children: ReactNode}) {
    const [items, dispatch] = useReducer(cartReducer, []);
    const value : CartContextValue = {
        items,
        addItem : (product) => dispatch({type:  'ADD', product: product}),
        removeItem : (productId) => dispatch({type: 'REMOVE', productId: productId}),
        setQuantity: (productId, quantity) => dispatch({type: 'SET_QUANTITY', productId, quantity}),
        clear: () => dispatch({type: 'CLEAR'}),
        totalCount: items.reduce((sum, it) => sum + it.quantity, 0),
        totalPrice: items.reduce((sum,it) => sum + it.product.price * it.quantity, 0)
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}