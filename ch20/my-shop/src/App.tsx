import './App.css'
import ProductGrid from './components/ProductGrid'
import { PRODUCTS } from './data/products'
import { useState } from 'react';
import type {Category} from './types'
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';

function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  // 카테고리가 all 이거나 칩에 있는 카테고리 이고  상품의 이름에 query 의 값이 있으면 새로운 배열로 반환
  const filtered = PRODUCTS.filter((p)=> (category === 'all' || p.category === category) && p.name.includes(query.trim()) );
  // filter 내부 함수 'all' 이거나 category 가  칩에서 선택된 카테고리이거나 => ture 경우만 새배열로
  // includes name 변수에 있는 글자에서 query 변수에 글자가 있으면 true 반환 없으면 false
  // name = "기계식 키보드", query = "기계식" name.includes(query) => true, 
  // includes 문자열 또는 배열 
  // const name = ["기계식","키보드"] query = "기계식" name.include(query) => true

  return (
    <div className='container'>
      <div className='page-head'>
        <h1>전체상품</h1>
      </div>
      <div className='toolbar'>
        <SearchBar value={query} onChange={setQuery}/>
        <CategoryFilter selected={category} onSelect={setCategory}/>
      </div>
      <ProductGrid products={filtered}/>
    </div>
  )
}

export default App
