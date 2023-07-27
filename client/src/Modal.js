import { Modal, Input, Button, Text } from "@nextui-org/react";
import { useState } from "react";
import { socket } from "./socket";
export default function ModalComponent(props){
    const [username,setUsername]= useState("")
    const [visible, setVisible] = useState(true)
    const closeHandler = () => {
         socket.emit('new-user-joined',username)
        console.log(username)
        props.getData(username)
        setVisible(false);
        console.log("closed");
      };
    return(
<Modal
        closeButton
        blur
        preventClose
        aria-labelledby="modal-title"
        open= {visible}
        // onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to 
            <Text b size={18}>
               Chat App
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            css={{marginTop:"10px !important"}}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Username"
            onChange={e=>{setUsername(e.target.value)}}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onPress={closeHandler}>
            Enter chat
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
