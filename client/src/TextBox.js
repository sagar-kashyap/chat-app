import {Container, Card, Text, Row } from "@nextui-org/react";
import { socket } from "./socket";
import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
export default function TextBoxComponent(props) {
  const [text,setText]=useState([])

 useEffect(()=>{

   socket.on('receive',data=>{
     console.log(data)
     setText((list)=>[...list,data])
     
    })
    },[])

  return (
    <div style={{display:"grid"}}>
    {text.map((message,index)=>{
     if (props.userName===message.name){

       return <div>
       <Container key={index} css={{float:"right" ,marginTop:"20px"}} xs={8} sm={5}>
          <Card css={{ $$cardColor: '$colors$primary'}}>
      <Card.Body>
      <Row css={{alignItems:"baseline"}}>
      <Text h6 size={18} color="white" css={{ m: 0 }}>
      {message.name}:&nbsp;&nbsp;
      </Text>
      <Text h6 size={15} color="white" css={{ m: 0 }}>
       {message.message}
      </Text>
      </Row>
      </Card.Body>
      </Card>
      </Container>
        </div>
      }
      else{
        return <div>
        <Container key={index} css={{float:"left", marginTop:"20px"}} xs={8} sm={5}>
        <Card css={{ $$cardColor: '$colors$primary'}}>
    <Card.Body>
    <Row>
    <Text h6 size={18} color="white" css={{ m: 0 }}>
      {message.name}:&nbsp;&nbsp;
      </Text>
      <Text h6 size={15} color="white" css={{ m: 0 }}>
       {message.message}
      </Text>
    </Row>
    </Card.Body>
    </Card>
    </Container>
    </div>
    
      }
    })}
  </div>
    )
  ;
}