import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Login.tsx 페이지 오기전에 직전 페이지 주소가 있으면 그 주소사용 아니면 루트( / ) 이동 
    // 직전 페이지 정보는 location.state.from 
    const from = (location.state as { from? : string} | null)?.from ?? '/';

    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {

    }
    
}