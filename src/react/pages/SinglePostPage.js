import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import GetPostWithId from "../../database/GetPostWithID";

function SinglePostPage() {
    const [searchParams] = useSearchParams();

    const [postData, setPostData] = useState({});
    const [id] = useState(searchParams.get('id'));

    useEffect(() => {
        GetPostWithId(id, setPostData);
    }, [id]);

    const renderPost = () => {
        if (postData) {
            return <Post postData={postData} IsSinglePost={true}/>
        }
    }

    return (
        <div className="single-post">
            {renderPost()}
        </div>
    );
}
  
  export default SinglePostPage;