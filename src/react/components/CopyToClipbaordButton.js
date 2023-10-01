import ClipboardIcon from "./ClipboardIcon";
import CopyToClipboard from "react-copy-to-clipboard";

export default function CopyToClipboardButton(props) {
    return(
        <div className="sharable-link-button">
            <CopyToClipboard text={props.text}
                onCopy={() => {}}>
                <span>{ClipboardIcon()} {props.displayText}</span>
            </CopyToClipboard> 
        </div>
    );
}
