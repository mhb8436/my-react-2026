import { CATEGORY_LABELS } from '../types'
import type { Category  } from '../types'

interface CategoryFilterProps {
    selected : Category | 'all' // 지금 고른 카테고리 메뉴가 들어올 변수 
    onSelect: (value: Category | 'all') => void // 앞으로 선택될 카테고리를 변경하는 함수 
}

export default function CategoryFilter({selected, onSelect} : CategoryFilterProps) {
    const categories = Object.keys(CATEGORY_LABELS) as Category[]; 
    // CATEGORY_LABELS 의 키 목록만 가지고와서 배열
    // Object.keys 함수는 객체서 키만 뽑아서 배열로 반환하다. 
    // [electronics, fashion, home, book, food ]
    // as Catgory[] :  string[] 배열이 아니라 Catgory[] 배열 타입이야 알려
    return (
        <div className='chips'>
            <button
                type="button"
                className={selected === 'all' ? 'chip active' : 'chip'}
                onClick={()=> onSelect('all')}
            >
                전체
            </button>
            {categories.map((c)=> (
                <button
                    key={c}
                    type="button"
                    className={selected === c ? 'chip active' : 'chip'}
                    onClick={()=>onSelect(c)}
                >   
                {CATEGORY_LABELS[c]}
                </button>
            ))}
        </div>
    )
}