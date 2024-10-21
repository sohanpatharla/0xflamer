import React, { useState } from 'react';
import { Container, Switch, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FLAMESCalculator from './components/FLAMESCalculator';
import './App.css';

// Theme toggling context
const ThemeContext = React.createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#ff8ab0' : '#ff4081', // Pink shades
      },
      background: {
        default: darkMode ? '#121212' : '#ffe6f2', // Light pink background
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} color="#FFFFFF">FLAMES Calculator</Typography>

            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Switch checked={darkMode} onChange={toggleTheme} />
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <FLAMESCalculator />
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
