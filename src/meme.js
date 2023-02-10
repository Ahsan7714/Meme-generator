import React from "react";
import memesdata from "./memesdata";





export default function Meme(){
    const[meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1yxkcp.jpg"
    
    })
    const[allMemeImage,setAllMemeImages]=React.useState(memesdata)

    function GetMemeimage(){
        const memesarray= memesdata.data.memes
        const randomnumber = Math.floor(Math.random()*memesarray.length)
        const url = memesarray[randomnumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
        console.log(setMeme)
        
    }
    return (<>
    <div className="meme">
        <form className="inputs">
            <input type="text" placeholder="top text"/>
            <input type="text" placeholder="bottom text"/>
        </form>
        <span className="btn" ><button className="btn1" type="search" onClick={GetMemeimage}>Get a new meme image</button></span>
    </div> 
    <div className="meme-image"><img src={meme.randomImage} className="meme-img"/></div></> )
}