import { trails } from "./data.js";
import {renderTrails} from "./pages/trails.js";
import {navigation} from "./navigation.js";

if(!localStorage.getItem("saves")){
    localStorage.setItem("saves", "[]");
    console.log("created local storage")
}
navigation()
renderTrails(trails);