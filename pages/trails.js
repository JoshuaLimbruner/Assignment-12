import {trails} from "../data.js";
import {renderSaved} from "./saved.js";
const wrapper = document.getElementById("wrapper");

export const renderTrails = (trailList)=>{
    wrapper.innerHTML=""
    if(trailList!=trails){
        const savedCount=document.createElement("div")
        savedCount.innerHTML="Saved: "+trailList.length
        wrapper.appendChild(savedCount)
    }
    trailList.forEach((trail)=>{
        const ele = document.createElement("div");
        const name = document.createElement("h2");
        const park = document.createElement("h1");
        const miles = document.createElement("p");
        const difficulty = document.createElement("div");
        const button = document.createElement("button");
        name.innerHTML = trail.name;
        park.innerHTML=trail.park;
        miles.innerHTML=trail.miles;
        difficulty.innerHTML=trail.difficulty;
        if(JSON.parse(localStorage.getItem("saves")).length!=0){
            if(localStorage.getItem("saves").includes(trail.id)){
                button.innerHTML="★ Saved"
                button.addEventListener("click",()=>removeTrails(trail,trailList))}
            else{
                button.innerHTML = "☆ Save"
                button.addEventListener("click", ()=>addTrails(trail))
        }}
        else{
            button.innerHTML = "☆ Save"
            button.addEventListener("click", ()=>addTrails(trail))
        }
        ele.appendChild(name);
        ele.appendChild(park);
        ele.appendChild(miles);
        ele.appendChild(difficulty);
        ele.appendChild(button);
        wrapper.appendChild(ele);
    })
}

const addTrails = (trail)=>{
    if(trails.includes(trail)){
        const saveState = JSON.parse(localStorage.getItem("saves"));
        saveState.push(trail.id);
        localStorage.setItem("saves", JSON.stringify(saveState))
        renderTrails(trails);
    }
    else{console.log("Item added does not exist in store")}
}
const removeTrails=(trail,trailList)=>{
    if(trailList.includes(trail)){
        console.log("should have removed the trait")
        const saveState=JSON.parse(localStorage.getItem("saves"))
        const removalSpot=saveState.indexOf(trail.id)
        saveState.splice(removalSpot,1)
        localStorage.setItem("saves", JSON.stringify(saveState));
        if(trailList===trails){renderTrails(trailList)}
        else{renderSaved()}
    }
}