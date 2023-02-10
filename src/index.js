import React from "react";
import  ReactDOM  from "react-dom";
import Meme from "./meme";
import "./index.css";
import data from "./memesdata";
import Header from "./header";

function Page(){
  return(<>    
  <Header/>
    <Meme/>
    </>

  )

}
ReactDOM.render(<Page/>,document.getElementById("root"))
