import React from "react";
import { TopNav } from "./TopNav.js";
import  {Layout} from "./Layout.js";
import TextBoxComponent from "./TextBox.js";
import InputComponent from "./Input.js";
function ChatComponent(){
    return(
        <>
        <Layout>
        <TopNav />
        <TextBoxComponent />

      </Layout>
      <InputComponent />
        </>
    )
}

export default ChatComponent