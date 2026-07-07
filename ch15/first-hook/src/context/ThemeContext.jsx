import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

// 1) 시냇물 만들기 채널 만들기 
const ThemeContext = createContext(null); 

// App.jsx 에서 사용 <ThemeProvider> <Layout/> <ThemeProvider>
export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useLocalStorage("ch15-dark-mode", false);

    function toggleTheme() {
        setIsDark(
            (prev) => !prev
        );
    }
    const value = {isDark, toggleTheme}
    // 2) 통을 감싸고 value에 값을 넣어서 나눠 줍니다.  -> Provider에서 하위 컴포넌트 모두에게 value 값을 던진다 
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
// 3) 시냇물에 둥둥 떠다니는 값을 어디서든 통에서 값을 꺼내서 사용할 수 있게 해주세요 
export function useTheme() {
    const context = useContext(ThemeContext);

    if(context === null) {
        throw new Error(`useTheme는ㄴ <ThemeProvider> 안에서만 쓸 수 있어요`)
    }
    return context;
}

export default ThemeContext;