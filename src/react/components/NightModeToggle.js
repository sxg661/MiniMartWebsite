import { useState } from "react"
import { format } from "react-string-format"

export default function NightModeToggle(props) {

    function CallHandler() {
        if(props.toggleHandler){
            props.toggleHandler();
        }
    }

    const GetIconClass = () => props.nightModeOn ? "fa-solid fa-moon" : "fa-solid fa-sun";

    return(
        <button className="night-mode-toggle" onClick = {CallHandler}>
            <div className="night-mode-toggle-slide-area">
                <div className="night-mode-toggle-slider">
                    <i className={format("night-mode-toggle-slider-icon {0}", GetIconClass())}></i>
                </div>
            </div>
        </button>
    )
}