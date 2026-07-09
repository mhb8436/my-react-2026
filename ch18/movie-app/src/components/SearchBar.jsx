export default function SearchBar({value, onChange, onSearch}) {
    function handleSubmit(e) {
        e.preventDefault()
        onSearch(value)
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="영화 제목을 영어로 검색하세요(예: spiderman, golden)"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
            <button type="submit" className="primary">
                검색
            </button>
        </form>
    )
}