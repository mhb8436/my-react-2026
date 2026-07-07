import { useTheme } from '../context/ThemeContext';

function ThemeToggleButton() {
    const {isDark, toggleTheme } = useTheme(); // useContext

    return (
        <button 
            className='primary'
            onClick={toggleTheme}
        >{ isDark ? "라이트 모드로": "다크 모드로"}</button>
    )
}

export default ThemeToggleButton;