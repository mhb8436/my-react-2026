import { useState, useEffect } from 'react';
import type { Order} from '../types'
import { getOrders, getOrder } from '../lib/api/orders'; 

export function useOrders() {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        async function load() {
            setLoading(true); setError(null);
            try{
                const data = await getOrders();//서버에서데이터를가지고온다.
                setOrders(data)
            }catch(e){
                setError("서버에서 불러오지 못했어요")
            }finally{
                setLoading(false)
            }
        }
        load();
    }, []); // [] 이면 이컴포넌트가 처음 로딩될때 실행

    return { orders, loading, error }
}

export function useOrder(id: string) {
    const [order, setOrder] = useState<Order | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        async function load() {
            setLoading(true); setError(null);
            try{
                const data = await getOrder(id); //서버에서데이터를가지고온다.
                setOrder(data)
            }catch(e){
                setError("서버에서 불러오지 못했어요")
            }finally{
                setLoading(false)
            }
        }
        load();
    }, []); // [] 이면 이컴포넌트가 처음 로딩될때 실행

    return { order, loading, error }
}