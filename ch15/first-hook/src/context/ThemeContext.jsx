import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

// 1) 빈 통 만들기 
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useLocalStorage("ch15-dark-mode", false);

    function toggleTheme() {
        setIsDark(
            (prev) => !prev
        );
    }
    const value = {isDark, toggleTheme}
    // 2) 통을 감싸고 value에 값을 넣어서 나눠 줍니다. 
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
// 3) 어디서든 통에서 값을 꺼내서 사용할 수 있게 해주세요 이것도 커스텀 훅 
export function useTheme() {
    const context = useContext(ThemeContext);

    if(context === null) {
        throw new Error(`useTheme는ㄴ <ThemeProvider> 안에서만 쓸 수 있어요`)
    }
    return context;
}

export default ThemeContext;