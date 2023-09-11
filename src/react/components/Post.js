import parse from 'html-react-parser';

export default function Post(props) {

    const convertTimestampToString = (timestamp) => {
        if(timestamp){
            return timestamp.toDate().toUTCString();
        }
        return "";
    }

    return(
        <div className="post">
            <div className="post-date">{convertTimestampToString(props.postData.time)}</div>
            <div className="post-title"><h3>{props.postData.title}</h3></div>
            {parse(props.postData.html ? props.postData.html : "")}
        </div>
    )
}