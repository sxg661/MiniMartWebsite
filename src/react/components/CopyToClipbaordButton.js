import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { format } from "react-string-format";
import ClipboardIcon from "./ClipboardIcon";

export default function CopyToClipboardButton(props) {
    const [showCopyNotice, setShowCopyNotice] = useState(false);

    const getHiddenClass = () => showCopyNotice ? "" : "copy-to-clipboard-button-copied-notice-hidden";

    function displayCopyNotice(){
        setShowCopyNotice(true);

        setTimeout(() => setShowCopyNotice(false), 1000);
    }

    return(
        <div className="copy-to-clipboard-button">
            <CopyToClipboard text={props.text}
                onCopy={displayCopyNotice}>
                <span>{ClipboardIcon()} {props.displayText}</span>
            </CopyToClipboard>

            <div className= {format("copy-to-clipboard-button-copied-notice {0}", getHiddenClass())}>Copied</div> 
        </div>
    );
}
