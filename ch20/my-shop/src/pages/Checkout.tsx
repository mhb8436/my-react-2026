import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { createOrder } from '../lib/api/orders';
import type { ShippingInfo } from '../types';
import { formatPrice } from '../lib/format'
import EmptyState from '../components/EmptyState';

export default function Checkout() {
    const {items, totalPrice, clear} = useCart();
    const navigate = useNavigate();// javascript 화면 이동 시사용
    const [form, setForm] = useState<ShippingInfo>({
        recipient: '',
        phone: '',
        zipcode: '',
        address: '',
        memo: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    if(items.length === 0){
        return (
            <EmptyState message="장바구니가 비어 결제할 수 없어요">
                <Link to="/">홈으로 가서 쇼핑을 계속하기</Link>
            </EmptyState>
        )
    }

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError(null);
        setSubmitting(true) 
        try{
            const order = await createOrder({items, shipping: form, total: totalPrice})
            clear(); // 장바구니 비우기 
            navigate('/orders/' + order.id)
            // 자바스크립트에서 해당 주소로 페이지를 옮겨 주는 역할을 해요 
        }catch(e) {
            setError('주문 처리 중 문제가 발생했어요')
        }finally{
            setSubmitting(false)
        }
    }

    return (
        <div className='stack'>
            <div className='page-head'>
                <h1>결제 하기</h1>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="recipient">받는 분</label>
                    <input
                        id="recipient"
                        name="recipient"
                        type="text"
                        value={form.recipient}
                        onChange={(e) => setForm((prev) => ({...prev, recipient: e.target.value})) }
                    />
                </div>
                <div className='field'>
                    <label htmlFor="phone">전화번호</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={form.phone}
                        onChange={(e) => setForm((prev) => ({...prev, phone: e.target.value})) }
                    />
                </div>
                <div className='field'>
                    <label htmlFor="zipcode">우편번호</label>
                    <input
                        id="zipcode"
                        name="zipcode"
                        type="text"
                        value={form.zipcode}
                        onChange={(e) => setForm((prev) => ({...prev, zipcode: e.target.value})) }
                    />
                </div>
                <div className='field'>
                    <label htmlFor="address">주소</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={(e) => setForm((prev) => ({...prev, address: e.target.value})) }
                    />
                </div>
                <div className='field'>
                    <label htmlFor="memo">배송메모</label>
                    <textarea
                        id="memo"
                        name='memo'
                        value={form.memo ?? ''}
                        onChange={(e) => setForm((prev) => ({...prev, memo: e.target.value})) }
                    />
                </div>

                <div className='summary'>
                    <span className='total'>{formatPrice(totalPrice)}</span>
                </div>

                {error && <p className='error-box'>{error}</p>}
                <button
                    type="submit"
                    className='btn btn-primary btn-block'
                    disabled={submitting}
                >
                    {submitting ? '처리 중...' : formatPrice(totalPrice) + ' 결재하기'}
                </button>
            </form>
        </div>
    )
}