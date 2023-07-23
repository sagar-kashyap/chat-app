import { Card, Text } from "@nextui-org/react";

export default function TextBoxComponent({props}) {
  return (
    <Card variant="flat" css={{ mw: "400px", margin:"30px" }}>
      <Card.Body>
        <Text>Sagar</Text>
      </Card.Body>
    </Card>
  );
}