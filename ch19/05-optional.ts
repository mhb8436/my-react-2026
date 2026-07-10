interface Product{
    id: string
    name: string
    price: number
    discount?: number // ? => 이 필드는 있어도 되고 없어도되
}

const headphone : Product = {
    id: 'p01', name:'에어팟프로', price: 289000,
}
const keyboard : Product = {
    id: 'k01', name: '해피해킹 프로페셔널', price: 360000, discount: 0.1
}

function salePrice(product: Product | undefined): string {
    // product?.name => product 에 undefined 가 들어오면 
    // 에러를 밷지말고 undefined를 바로 돌려줘
    // ?? 외쪽이 undefined 이면 오른쪽 내용을 사용하세요 
    const name = product?.name ?? '상품'
    // const price = product.price;
    return name
}
console.log(salePrice(headphone))
console.log(salePrice(undefined))

