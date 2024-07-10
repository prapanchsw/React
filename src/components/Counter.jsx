import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[name,SetName]=useState(0)
    
    const x=()=>{
    
        SetName(name-1);
    };
    const y=()=>{

        SetName(name+1);
    };
  return (
    <div>
      <Button variant='contained' onClick={x}> - </Button>
      <Typography variant='h2'> {name} </Typography>
      <Button variant='contained' onClick={y}> + </Button>
    </div>
  )
}

export default Counter
