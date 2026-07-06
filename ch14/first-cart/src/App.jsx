import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductList  from './components/ProductList';
import CartSummary from './components/CartSummary'
import Card from './components/Card'

const PRODUCTS = [
  {id: 1, name: '아메리카노', price: 4500},
  {id: 2, name: '카페라테', price: 5500},
  {id: 3, name: '수박주스', price: 8500},
  {id: 4, name: '딸기케이크', price: 5500},
  {id: 5, name: '말차라테', price: 7500},
]

function App() {
  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    setCart( // prevCart는 setCart 가 호출되는 시점의 최신 cart 정보 
      (prevCart) => {
        // 1. 장바구니에 동일한 제품아이디가 있어? 찾는겁니다. 
        const found = prevCart.find((item) => item.id === product.id);
        if(found) {
          // 2. 동일한 제품이 있으면 수량만 1 증가한 상태로 올린 새배열을 만들거에요 
          // cart내의 객체의 키는 id, name, price, quantity 
          return prevCart.map(
            (item)=> {              
              return item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            }
          );
        }
        return [...prevCart, {...product, quantity: 1}];
      }
    );
  }

  const handleRemove = (id) => {
    setCart( 
      // carts 를 돌면서 cart의 아이디가 인자로
      // 들어온 id와 같지 않은 신규배열을 반환
      (prevCart) => prevCart.filter((item) => item.id !== id)
    );
  }

  // id 카트번호, diff 는 몇 개씩 증가 또는 뺄 것인지 
  const handleChangeQuantity = (id, diff) => {
    setCart(
      (prevCart) => 
        prevCart.map(
          (item) => 
            item.id === id 
            ? { ...item, quantity: Math.max(1, item.quantity + diff)}
            : item
        )
    );
  }

  return (
    <>
      <h1>카페 장바구니</h1>
      <Card title="상품목록">
        <ProductList 
          products={PRODUCTS}
          onAdd={handleAdd}
        />
      </Card>

      <Card title="장바구니">
        <CartSummary 
          items={cart}
          onChangeQuantity={handleChangeQuantity}
          onRemove={handleRemove}
          />
        </Card>
    </>
  )
}

export default App
