import { createContext, useContext } from 'react';
import { useFavorites } from '../hooks/useFavorites';

// context는 시냇물이다
const FavoritesContext = createContext(null);

// provider 를 통해서 시냇물에 데이터를 흘립니다.
export function FavoritesProvider({children}) {
    const favorites = useFavorites();
    return (
        <FavoritesContext.Provider value={favorites}>
            {children}
        </FavoritesContext.Provider>
    )
}

// 어느컴포넌트에서도 가져다 사용할 수 있는 함수-훅을 만듭니다
export function useFavoritesContext() {
    const ctx = useContext(FavoritesContext);
    if(!ctx) {
        throw new Error(`useFavoritesContext 는 FavoritesProvider 안에서만 사용할 수 있어요`)
    }
    return ctx;
}