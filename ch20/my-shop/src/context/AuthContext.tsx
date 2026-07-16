import { createContext, useContext, useState, type ReactNode} from 'react';
import type { User } from '../types'; 
import { clearToken, setToken } from '../lib/auth/token';
import { delay } from '../lib/api/client';

const USER_KEY = 'shop-user';

function readUser() : User | null {
    try{
        const raw = localStorage.getItem(USER_KEY); // raw 는 string(json)
        return raw ? JSON.parse(raw) as User : null
    }catch(e) {
        return null;
    }
}

export interface AuthContextValue {
    user: User | null;
    login : (email : string, password : string) => Promise<void>
    logout : () => void
}

export const AuthContext = createContext<AuthContextValue | null> (null);

export function AuthProvider({children} : {children: ReactNode}) {
    // useState 초기값은 localStroage의 유저로채움
    const [user, setUser] = useState<User | null>(()=>readUser());
    const value : AuthContextValue = {
        user, 
        login: async (email, password) => {
            await delay(400); // 나중에 POST /auth/login 실제 서버호출 바꿔야 합니다.
            setToken('mock-jwt-token'); //mock-jwt-token 서버에서 받은 jwt 토큰을 넣어줭 햡니다
            // login 화면에서는 email, password => name 이메일 주소의 앞 사용자명으로 넣을거에요
            // mhb8436@gmail.com  -> split('@') ["mhb8436", "gmail.com"]
            const next: User = {id: 'u1', email, name: email.split('@')[0] ?? '회원'}
            setUser(next)
        },
        logout: () => {
            clearToken()
            localStorage.removeItem(USER_KEY)
            setUser(null)
        }
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}