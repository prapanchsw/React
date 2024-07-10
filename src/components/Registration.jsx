import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
      <Typography>Registration Forn</Typography>
      <TextField variant="outlined" label="Name" id='id1' ></TextField><br />
      <TextField variant="outlined" label="age"></TextField><br />
      <TextField variant="outlined" label="place"></TextField><br />
      <TextField variant="outlined" label="Department"></TextField><br /><br />
      <Button variant='contained' color="error">Submit</Button>&nbsp;
    </div>
  )
}

export default Registration
