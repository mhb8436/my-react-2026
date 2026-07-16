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
