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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

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
            </form>
        </div>
    )
}