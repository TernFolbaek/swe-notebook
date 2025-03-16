import React from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import Content from './Content';
function App() {

  const [theme, setTheme] = React.useState('light');


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? '#333' : '#f5f5f5',
        padding: '20px',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}>
        <ThemeToggle/>
        <Content/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;