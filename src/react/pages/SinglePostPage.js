import { useContext } from "react";
import PostContext from "../../contexts/PostContext";

function SinglePostPage() {
    const postContext = useContext(PostContext)

    return (
        <div className="test">
            A Post with id {postContext.id}
        </div>
    );
    }
  
  export default SinglePostPage;