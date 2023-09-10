import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import GetPostWithId from "../../database/GetPostWithID";

function SinglePostPage() {
    const [searchParams] = useSearchParams();

    const [postData, setPostData] = useState({});
    const [id] = useState(searchParams.get('id'));
    const [postHtml, setPostHtml] = useState("");
    const [postDateTime, setPostDateTime] = useState("");

    const convertTimestampToString = (timestamp) => {
        return timestamp.toDate().toUTCString();
    }

    useEffect(() => {
        GetPostWithId(id, setPostData);
    }, [id]);

    useEffect(() => {
        setPostHtml(postData && postData.html ? postData.html : "");
        if(postData && postData.time){
            console.log(postData.time);
        }
        setPostDateTime(postData && postData.time ? convertTimestampToString(postData.time) : "");
    }, [postData, setPostData]);

    return (
        <div className="single-post">
            <div className="post-container">
                <div className="post-date">{postDateTime}</div>
                {parse(postHtml)}
            </div>
        </div>
    );
    }
  
  export default SinglePostPage;