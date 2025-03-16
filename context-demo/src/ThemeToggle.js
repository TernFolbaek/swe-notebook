import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <button
        onClick={toggleTheme}
        style={{backgroundColor: theme == 'light' ? 'white' : 'black'}}
        >
            Switch Theme
        </button>
    )
}

export default ThemeToggle;