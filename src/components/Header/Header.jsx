import React from "react";
import { Button, Switch } from '@mui/material'
import { useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'
import Nav from "./Nav";
import './Header.css';

const Header = () => {
  const { username, updateUsername } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header-${theme}`}>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <Nav/>
      
      {username? 
      <>
      <p>Hola, {username}</p>
      <button onClick={()=>updateUsername("")}>Logout</button>
      </>: "Bienvenido"}
      <Switch  sx={{
        marginTop:0.8,
        marginRight: 1
      }}
      defaultChecked onClick={toggleTheme}/>
      
    </header>
  )
};

export default Header;