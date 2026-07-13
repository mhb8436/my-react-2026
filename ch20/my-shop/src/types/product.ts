export type Category = 'electronics' | 'fashion' | 'home' | 'book' | 'food';

export const CATEGORY_LABELS 
    : Record<Category, string> = {
    electronics: "전자기기",
    fashion : "패션",
    home: "리빙",
    book: "도서",
    food: "식품",
}

export interface Product {
    id: string
    name: string
    description: string 
    price: number      // 원단위 정수 
    category: Category
    image: string      // 이미지 URL 
    stock: number      // 재고 수량
    rating: number     // 평점 0 - 5
}