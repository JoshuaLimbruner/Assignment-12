import {renderTrails} from "./pages/trails.js";
import {renderSaved} from "./pages/saved.js";
import {trails} from "./data.js";

const wrapper = document.getElementById("wrapper");

export function navigation() {
    document.getElementById("viewSaved").addEventListener("click", function () {
        wrapper.innerHTML = "";
        renderSaved();
    })
    document.getElementById("viewTrails").addEventListener("click", function () {
        wrapper.innerHTML = "";
        renderTrails(trails);
    })
}