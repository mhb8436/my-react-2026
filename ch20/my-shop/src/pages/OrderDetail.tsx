import { Link, useParams } from 'react-router-dom';
import { useOrder } from '../hooks/useOrders'
import { formatPrice } from '../lib/format'
import Spinner from '../components/Spinner';
import EmptyState from '../components/EmptyState';

export default function OrderDetail() {
    const { id } = useParams<{id: string}>();
    const {order, loading, error} = useOrder( id ?? '');

    if(loading) return <Spinner/>
    if(!order) {
        return (
            <EmptyState message='주문을 찾을 수 없어요 '>
                <Link to="/orders">주문 내역으로 이동</Link>
            </EmptyState>
        )
    }

    return (
        <div className='stack'>
            <div className='page-head spread'>
                <h1>주문 번호 {order.id}</h1>
                <p>{order.status}</p>
            </div>
            <p className='muted'>{new Date(order.createdAt).toLocaleString('ko-KR')}</p>
            
            <section className='stack'>
                <h2>배송지</h2>
                <p>{order.shipping.recipient}</p>
                <p>{order.shipping.phone}</p>
                <p>{order.shipping.zipcode} - {order.shipping.address}</p>
                {order.shipping.memo && <p className='muted'>{order.shipping.memo}</p>}
            </section>

            <section className='stack'>
                <h2>주문 항목</h2>
                {order.items.map((item)=> (
                    <div key={item.product.id} className='row spread'>
                        <span> {item.product.name} x {item.quantity} </span>
                        <span className='line-total'>
                            {formatPrice(item.product.price * item.quantity)}
                        </span>
                    </div>
                ))}
            </section>

            <div className='summary'>
                <span className='total'>합계 {formatPrice(order.total)}</span>
            </div>
            <Link to="/orders">주문 내역으로 돌아가기</Link>
        </div>
    )
}