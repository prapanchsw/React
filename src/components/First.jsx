import { Button, TextField, Typography } from '@mui/material'
import React from 'react'//rafce

const First = () => {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <br /><br />
      <input type="text" placeholder="password" />
      <br /><br />
      <button>Submit</button>
      <Typography variant='h1'>Login Page</Typography>
      <TextField variant='outlined' label="OUTlined"></TextField><br /><br />
      <TextField variant='filled' label="filled"></TextField><br /><br />
      <TextField variant='standard' label="standard"></TextField>
     
      <Button variant='text' color="error">Text</Button>&nbsp;
      <Button variant='contained' color="secondary">Contained</Button><br /><br />
      <Button variant='outlined' color="success">Outlined</Button><br /><br />
    
    </div>
  )
}

export default First

