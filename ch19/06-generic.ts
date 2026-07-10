// 인자로 받은 items 배열에서 첫번째 인자만 반환한다. 
// T는 자리표시자 : 이 함수가 다루는 타입을 지칭하는 변수이름 
// Type 약자 
function first<T>(items: T[]) : T {
    return items[0]; // K 타입 
}

const names : string[] = ['수진','민준','지우']
const prices : number[]  = [10000, 20000, 30000]

const a = first<string>(names);
console.log(a)
const b = first<number>(prices);
console.log(b)
// const c = first<string>(prices);
// useState<Product[]>([])
// useState<string[]>([])
// any 는 지양 , 가능하면 쓰지마세요
function first1(items: any[]) { // java Object
    return items[0]
}