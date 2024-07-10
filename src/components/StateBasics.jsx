import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName]=useState("prapanch");
    var[car,setCar]=useState("Creta")
    var[z,setx]=useState()
    var[y,sety]=useState()

    const x=()=>{
        setName(z);
        setCar(y);
    };
    const inputHandler=(a)=>{
        setx(a.target.value);

    };
    const inputH=(b)=>{
        sety(b.target.value);
    };
  return (
    <div>
      <Typography>Hello my name is  {name} and i have a {car}</Typography>
      <br /><br />
    
      <TextField variant='filled' onChange={inputHandler}></TextField><br /><br />
      <TextField variant='filled' onChange={inputH}></TextField><br /><br />
      <Button variant='contained'onClick={x} >change</Button>


    </div>
  )
}

export default StateBasics
