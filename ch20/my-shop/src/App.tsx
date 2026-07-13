import './App.css'
import ProductGrid from './compnents/ProductGrid'
import { PRODUCTS } from './data/products'

function App() {
  return (
    <div className='container'>
      <div className='page-head'>
        <h1>전체상품</h1>
      </div>
      <ProductGrid products={PRODUCTS}/>
    </div>
  )
}

export default App
