import type { Product } from './product';

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartState {
    items: CartItem[]
}

// 장바구니를 바꾸는 동작을 미리 정의 
// type , 동작 을 기재합니다. 
// 카트에 추가 : ADD, 카트에서 제거 : REMOVE, 수량변경 : SET_QUANTITY, 
// 카트 비우기는 : CLEAR 
export type CartAction = { type: 'ADD', product: Product}
    | {type: 'REMOVE', productId: string}
    | {type: 'SET_QUANTITY', productId: string, quantity: number}
    | {type: 'CLEAR'}