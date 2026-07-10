function formatPrice(won: number):string {
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
