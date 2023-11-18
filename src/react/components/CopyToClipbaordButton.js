import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { format } from "react-string-format";
import ClipboardIcon from "./ClipboardIcon";

let displayCopyNoticeStartTime = -1;

export default function CopyToClipboardButton(props) {
    const [showCopyNotice, setShowCopyNotice] = useState(false);

    const getHiddenClass = () => showCopyNotice ? "" : "copy-to-clipboard-button-copied-notice-hidden";

    function displayCopyNotice(){
        setShowCopyNotice(true)
        const startTime = Date.now();
        displayCopyNoticeStartTime = startTime;

        setTimeout(() => {
            if(startTime === displayCopyNoticeStartTime) {
                setShowCopyNotice(false)
            }
        }, 1000);
    }

    function copy() {
        window.navigator.clipboard.writeText(props.text);
        displayCopyNotice();
    }

    return(
        <button className="copy-to-clipboard-button" onClick={copy}>
            <span>{ClipboardIcon()} {props.displayText}</span>
            <div className= {format("copy-to-clipboard-button-copied-notice {0}", getHiddenClass())}>Copied</div> 
        </button>
    );
}
