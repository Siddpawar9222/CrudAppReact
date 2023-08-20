import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/material"
import { NavLink } from 'react-router-dom';

const Header  = styled(AppBar)`
  background: #111111;
`
const Tabs = styled(NavLink)`
  font-size: 21px ;
  margin-right :20px ;
  text-decoration: none ;
  color : white ;
`
const NavBar = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to="/">
                CRUD OPERATION
            </Tabs>
            <Tabs to="/all">
                ALL USERS
            </Tabs>
            <Tabs to="/add">
                ADD USER
            </Tabs>
        </Toolbar>
    </Header>
  )
}

export default NavBar