function formatPrice(won: number) :string {
    return `${won} 원`;
}
console.log(formatPrice(12000));

function discount(price: number, rate: number = 0.1) : number {
    return Math.round(price * (1-rate));
    // Math.round -> 반올림, Math.ceil -> 올림, Math.floor -> 내림
}

console.log('10%할인 가격', formatPrice(discount(212300)))
// 문제 1 345100 을 20% 할인 받은 가격을 출력해보세요
console.log('20%할인 가격', formatPrice(discount(345100, 0.2)))

// 연습문제 1 
// inStock 이라는 매개변수에 true 들어오면 '재고있음'을 반환해주고
// isStock 에 false 들어오면 '재고없음'을 반환해주는 stockLabel 함수를
// 만들어보세요 
function stockLabel(inStock: boolean ) : string {
    if(inStock) return "재고있음"
    else return "재고없음"
}
// 연습문제 2
// baseFree 기본값이 3000 원, shippingFee 함수를 만들어보세요 
// extraKg(추가 kg)더해질 때마다 kg 당 500원씩 더합니다. 
function shippingFee(baseFee: number = 3000, extraKg: number) {
    return baseFee + extraKg * 500;
}

console.log('기본 배송비', shippingFee(3000, 0));
console.log('오른 배송비', shippingFee(4000, 2));


