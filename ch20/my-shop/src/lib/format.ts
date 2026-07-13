export function formatPrice(won : number ): string {
    return `${won.toLocaleString('ko-KR')}원`
}
// ko : 한국어
// KR : 대한민국 
// 219000  -> 219,000원 가격표시에 적합하게 바꿔줍니다. 