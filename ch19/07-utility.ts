type Category = 'electronics' | 'fashion' | 'book'

interface Product { // 객체의 설계도 
    id: string
    name: string
    price: number
    category: Category
}

// Pick 유틸리티 함수 
// 객체의 설계도 Product 에서 id와 name만 추출한 새로운 타입 생성
type ProductPreview = Pick<Product, 'id' | 'name'>
const previewProduct : ProductPreview = { 
    id: 'p01', name:'키보드'
}
// console.log(previewProduct);

// Omit 유틸리티 함수
// id가 빠진 타입을 만들어주세요 
type NewProduct = Omit<Product, "id">
const draft :NewProduct = {name: "기계식키보드", price:100000, category:'electronics'}
console.log(draft)

// Partial 
function updateProduct(id: string, patch: Partial<Product>) {
    console.log(`$${id} 수정`, patch)
}
console.log(previewProduct, draft);
updateProduct('p01', {price: 10000}); //  name, category
console.log(previewProduct, draft);


// 연습문제 
// 연습 1
// Product 에서 id, price, category 만 뽑은 ProductPriceInfo 타입을 만들고
// 객체를 선언해보세요

type ProductPriceInfo = Pick<Product,'id' | 'price' | 'category'>
const priceInfo : ProductPriceInfo = {
    id: "p01", price: 100, category: "electronics"
}

// Record<키타입, 값타입> = 
const labels: Record<Category, string> = {
    electronics: "전자기기", 
    fashion: "패션",
    book: "도서"
}
console.log(labels)
// const labels2: { [key:string] : string} = {...}