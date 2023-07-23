import {React,useState} from "react";
import { TopNav } from "./TopNav.js";
import  {Layout} from "./Layout.js";
import TextBoxComponent from "./TextBox.js";
import InputComponent from "./Input.js";
function ChatComponent(){

    const [textValue,setTextValue]=useState("0")
    return(
        <>
        <Layout>
        <TopNav />
        <TextBoxComponent data={textValue}/>
      </Layout>
      <InputComponent getData={setTextValue} />
        </>
    )
}

export default ChatComponent