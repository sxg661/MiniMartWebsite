import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import CopyToClipboardButton from './CopyToClipbaordButton';
import GetPostInDateRange from '../../database/GetPostsInDateRange';

export default function Post(props) {

    const navigate = useNavigate();

    const convertTimestampToString = (timestamp) => {
        if(timestamp){
            return timestamp.toDate().toUTCString();
        }
        return "";
    }

    const getPostClass = () => props.IsSinglePost ? "post post-single-post" : "post post-main-page";

    function getPostTitleElement() {
        if(!props.IsSinglePost && props.postData.id){
            return <button className="post-title" onClick={() => navigate(`/post?id=${props.postData.id}`)}>
                    <h3>{props.postData.title}</h3>
                </button>
        }
        else {
            return <div className="post-title"><h3>{props.postData.title}</h3></div>
        }
    }

    function getPostUrl() {
        return `https://minimart.dev/#/post?id=${props.postData.id}`
    }

    function getDateElement() {
        if(props.postData.time) {
            return <div className="post-date">{convertTimestampToString(props.postData.time)}</div>
        }
    }

    function getCopyToClipboardButton() {
        if(!props.HideCopyToClipboardButton){
            return <CopyToClipboardButton text={getPostUrl()} displayText="Copy sharable link"/>
        }
    }

    return(
        <div className={getPostClass()}>
            {getDateElement()}
            {getPostTitleElement()}
            {parse(props.postData.html ? props.postData.html : "")}
            {getCopyToClipboardButton()}
        </div>
    )
}