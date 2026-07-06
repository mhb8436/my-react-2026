// 무엇이 들어올지 모른 채로 테두리만 둘러주는  wrap (래퍼) 컴포넌틍
function Card({title, children }) {
    return (
        <section className="card">
            {title &&  <h2>{title}</h2>}
            {children}
        </section>
    );
}

export default Card;