import { format } from "react-string-format"

export default function EarlierLaterButtons(props) {

    const enableLaterButtonClass = props.enableLaterButton ? "" : "el-buttons-disabled";
    const enableEarlierButtonClass = props.enableEarlierButton ? "" : "el-buttons-disabled";

    function HandleLaterButtonClick() {
        if(props.enableLaterButton && props.handleLaterButtonClick){
            props.handleLaterButtonClick();
        }
    }

    function HandleEarlierLButtonClick() {
        if(props.enableEarlierButton && props.handleEalierButtonClick){
            props.handleEalierButtonClick();
        }
    }

    return(
        <div className="el-buttons-container">
           <button 
           className={format("el-buttons-button el-buttons-later {0}", enableLaterButtonClass)}
           onClick = {HandleLaterButtonClick}>
                Show Later
            </button>
            <button 
            className={format("el-buttons-button el-buttons-earlier {0}", enableEarlierButtonClass)}
            onClick = {HandleEarlierLButtonClick}>
                Show Earlier
            </button> 
        </div>
    )
}