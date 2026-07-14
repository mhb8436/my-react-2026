interface SearchProps {
    value: string;
    onChange  : (value : string) => void; // void 리턴값이 없어요 
    placeholder? : string;
}

export default function SearchBar({ value, onChange, placeholder = '상품 검색'} : SearchProps) {
    return (
        <input
            type="text"
            className="search-input"
            value={value}
            placeholder={placeholder}
            onChange={(e)=> onChange(e.target.value)}
        />
    )
}