import { Input, Grid,Button } from "@nextui-org/react";

export default function InputComponent() {
  return (
    <Grid.Container gap={2} justify="center">

<Grid>
<Input 
  bordered 
  labelPlaceholder="Enter text" 
  color="primary" 
  width="400px"/>
</Grid>
<Grid>

  <Button auto shadow color="primary">Send</Button>
</Grid>
  </Grid.Container>
  )}