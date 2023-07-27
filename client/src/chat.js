import {React,useState,useEffect} from "react";
import { TopNav } from "./TopNav.js";
import  {Layout} from "./Layout.js";
import TextBoxComponent from "./TextBox.js";
import InputComponent from "./Input.js";
import ModalComponent from "./Modal.js";
import { socket } from "./socket.js";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function ChatComponent(){

    const [admin,setAdmin]=useState("")
    const [newuser,setNewuser]=useState(null)
    useEffect(()=>{

      socket.once('user-joined',data=>{
        console.log(data)
        setNewuser(data)
        notify(newuser)
       })
       return socket.off('user-joined')
       },[newuser])

       const notify = (user) => toast(`${user}`+" "+"Joined the chat");
    return(
        <>
        <Layout>
        {/* <button onClick={notify}>Notify!</button> */}
          <ToastContainer />
          <ModalComponent getData={setAdmin} />
        <TopNav />
        <TextBoxComponent userName={admin}
        />
      </Layout>
      <InputComponent />
        </>
    )
}

export default ChatComponent