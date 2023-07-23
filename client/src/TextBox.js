import { Card, Text, Grid } from "@nextui-org/react";

export default function TextBoxComponent(props) {
  return (
    <Grid xs={8} sm={5}>

    <Card variant="flat" css={{ margin:"30px" }}>
      <Card.Body>
        <Text>{props.data}</Text>
      </Card.Body>
    </Card>
    </Grid>
  );
}