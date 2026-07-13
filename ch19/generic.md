# 제네릭 T 

## **T** 가 뭐에요? 

### 정의

> **T는 나중에 채워질 타입 빈캄 호출 할때는 이 빈칸에 `string`, `number` 와 같은 실제 타입을 채워야해요**

### 헤깔리는 이유 
- T는 새로운 타입의 이름이다 -> T는 **빈칸(자리표시자)** 정해진 타입이 아닙니다.
- T라는 글자에는 특별한 의미가 있아 -> 관례 일뿐, `Item`, `Value`, `K` , `V`

### 제네릭을 안쓸 경우

```ts
// 배열에서 첫번째 요소만 반환해서 가지고 오는 함수를 만들고 싶어요
// 문자열 배열, 숫자형 배열 

function firstString(items: string[]) : string | undefined {
    return items[0]
}

function firtNumber(items : number[] ) : number | undefined {
    return items[0]
}

function firstBoolean(items : boolean[] ) : boolean | undefined {
    return items[0]
}
function firstProduct(items : Product[] ) : boolean | undefined {
    return items[0]
}
```

## 2단계 불합리한 반복되는 부분을 빈칸으로

```ts
firstString -> items: string[]  반환 string | undefined
firstNumber -> items: number[]  반환 number | undefined
firstBoolean -> items: boolean[] 반환도 boolean | undefined

```
> 여기서 함수별로 달라지는건 string, number, boolean 이렇게 타입만 달라졌어요 
> 이 타입 자리만 T 로 바꾸는거에요 

```ts
function first<T>(items: T[]): T | undefined {
    return items[0]
}
```
| 표기 | 읽는 법 |
|-----|-------|
| `<T>` | "이 함수는 타입 빈간 T를 하나 씁니다. (선언) |
| `items: T[]` | "T의 배열을 받겠습니다. " |
| `:T \| undefined` | "T 하느를 또는 undefined 를 돌려줍니다. |

## 사용하는 방법 
```ts
    const names = ['수진','민준','지우']
    first<string>(names) -> 직접 지정 할 수도있고
    first(names) -> <T> 자리에 string 알아서 추론 
```


## react 에서는 
```ts
const [products, setProducts] = useState([]) // 자바스크립트에서
const [products, setProducts] = usaeState<Product[]>([]);

```