const wrapper = document.getElementById("wrapper");
import { trails } from "../data.js";
import { renderTrails } from "./trails.js";

export const renderSaved = ()=>{
    wrapper.innerHTML=""
    const saved = JSON.parse(localStorage.getItem("saves"));
    console.log(saved)
    const ele = document.createElement("div");
    if(saved.length===0){
        ele.innerHTML="No saved trails yet"
        wrapper.appendChild(ele)
    }
    else{
        ele.innerHTML="Saved: "+saved.length
        wrapper.appendChild(ele)
        const savedTrails=trails.filter(trail=>saved.includes(trail.id))
        console.log(savedTrails)
        renderTrails(savedTrails)
    }}