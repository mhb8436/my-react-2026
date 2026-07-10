import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='container center'>
            <h1>페이지를 찾을 수 없어요(404)</h1>
            <p className='muted'>없는 페이지입니다.</p>
            <Link to="/" className='primary-link'>홈으로 돌아가기</Link>
        </div>
    );
}