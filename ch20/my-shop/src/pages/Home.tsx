import ProductGrid from '../components/ProductGrid'
import { PRODUCTS } from '../data/products'
import { useState } from 'react';
import type {Category} from '../types'
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import PromoBanners from '../components/PromoBanners';
// ../ 부모디렉토리에서 찾아라
// ./  현재디렉토리에서 찾아라

export default function Home() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState<Category | 'all'>('all');

    const filtered = PRODUCTS.filter((p)=> (category === 'all' || p.category === category) && p.name.includes(query.trim()) );
    return (
        <div className='container'>
            <PromoBanners/>
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