import { format } from "react-string-format"

export default function NightModeToggle(props) {

    return(
        <div className="night-mode-toggle">
            <div className="night-mode-toggle-slide-area">
                <div className="night-mode-toggle-slider">
                    <i class="night-mode-toggle-slider-icon fa-solid fa-moon"></i>
                </div>
            </div>
        </div>
    )
}