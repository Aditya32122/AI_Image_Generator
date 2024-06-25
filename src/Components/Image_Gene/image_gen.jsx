import React, { useRef, useState } from "react";
import './image_gen.css'
import default_img from '../Assets/dp.jpg'

const Image_gen=()=>{

    const [image_url,setImage_url]=useState("/");
    let inputRef=useRef(null);
    const imageGenerator=async()=>{
        if(inputRef.current.value===""){
            return 0;
        }
        const responce =await fetch(
"https://api.openai.com/v1/images/generations",
{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Authorization:
        "Bearer YOUR API KEY",
        "User-Agent":"Chrome",
    },
    body:JSON.stringify({
        prompt:`${inputRef.current.value}`,
        n:1,
        size:"512x512",
    }),

}
        );
        let data = await responce.json();
        let dataarray = data.data;
        setImage_url(data_array[0].url);
    }
    return(
        <div className="img_gen">
            <div className="header">AI iamge <span>Generator</span></div>
        <div className="img_loading"></div>
        <div className="image"><img src={image_url==='/'?default_img:image_url} alt="" /></div>
        
        <div className="searchbox">
            <input type="text"className="searchinput" ref={inputRef} placeholder="Describe what you want" />
            <div className="generatebutton" onClick={()=>{imageGenerator()}}>Generate</div>
        </div>

        </div>
        
    )
}

export default Image_gen