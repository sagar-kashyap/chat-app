import {Grid,Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { socket } from "./socket";


export default function InputComponent() {
    const [message, setMessage]=useState("")
    const button=()=>{
      socket.emit('send',message)
        console.log(message)
    }
    const handleChange=(event)=>{
        setMessage(event.target.value)
        console.log(event.target.value)
    }
  return (
    <Grid.Container gap={2} justify="center">

<Grid>
<Input onChange={handleChange} width="400px" color="primary" size="lg" bordered labelPlaceholder="Enter text"/>

</Grid>
<Grid>

  <Button auto shadow color="primary" onClick={button}>Send</Button>
</Grid>
  </Grid.Container>
  )}