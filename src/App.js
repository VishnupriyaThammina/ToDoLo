import React from 'react';
import { BrowserRouter, Navigate, Route, Routes,Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ToDoLo from './pages/TodoLo';
import Signup from './pages/Signup';
import Theme from './components/Theme';

function App() {
  // Initialize isLogged based on local storage, or default to false if not found
  const isLogged = JSON.parse(localStorage.getItem('logDeet')) || false;

  const Nav = ({isLogged} ) =>{
    return isLogged?(
      <Navigate to='/login' replace />
    ):(
      <Navigate to='/signup' replace />
    )
  }
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter >
        <Navbar />

        <Routes>
          <Route path="/" element={<Nav isLogged={isLogged} />} />
         <Route exact path="/signup" element={<Signup />} />
          <Route path='/list' element={<ToDoLo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
  