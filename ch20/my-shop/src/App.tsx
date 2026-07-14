import './App.css'
import ProductGrid from './components/ProductGrid'
import { PRODUCTS } from './data/products'
import { useState } from 'react';
import type {Category} from './types'
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [category, setCategory] = useState<Category | 'all'>('all')
  return (
    <div className='container'>
      <div className='page-head'>
        <h1>전체상품</h1>
      </div>
      <div className='toolbar'>
        <CategoryFilter selected={category} onSelect={setCategory}/>
      </div>
      <ProductGrid products={PRODUCTS}/>
    </div>
  )
}

export default App
