import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FaceBook
          </Typography>
          <Button >
            <Link to={"/"} style={{textDecoration:"none" , color:"white"}}>Login</Link></Button>
            <Button >
            <Link to={"/ooq"} style={{textDecoration:"none" , color:"white"}}>Register</Link></Button>
            <Button >
            <Link to={"/kkk"} style={{textDecoration:"none" , color:"white"}}>Tab</Link></Button>
            <Button >
            <Link to={"/k"} style={{textDecoration:"none" , color:"white"}}>Counter</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar1
