import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import CopyToClipboardButton from './CopyToClipbaordButton';

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
        return `minimart.dev/#/post?id=${props.postData.id}`
    }

    return(
        <div className={getPostClass()}>
            <div className="post-date">{convertTimestampToString(props.postData.time)}</div>
            {getPostTitleElement()}
            {parse(props.postData.html ? props.postData.html : "")}
            <CopyToClipboardButton text={getPostUrl()} displayText="Copy sharable link"/>
        </div>
    )
}