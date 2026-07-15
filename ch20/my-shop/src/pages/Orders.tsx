import { Link } from 'react-router-dom';
import { useOrders } from '../hooks/useOrders'
import { formatPrice } from '../lib/format'
import Spinner from '../components/Spinner';
import EmptyState from '../components/EmptyState';

export default function Orders() {
    const { orders, loading, error } = useOrders();

    if(loading) return <Spinner/>
    if(orders.length === 0) {
        return (
            <EmptyState message='주문 내역이 없습니다.'>
                <Link to="/">쇼핑하러 가기</Link>
            </EmptyState>
        )   
    }
    return (
        <div>
            <div className='page-head'>
                <h1>주문 내역</h1>
            </div>
            <div className='stack'>
                {orders. map((o)=> (
                    <Link key={o.id} to={`/orders/${o.id}`} className='order-row spread'>
                        <div>
                            <div>{o.id}</div>
                            <div className='muted'>
                                {new Date(o.createdAt).toLocaleDateString('ko-KR')} - {o.items.length} 개 항목 
                            </div>
                            <div className='row'>
                                <p>{o.status}</p>
                                <span>{formatPrice(o.total)}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}