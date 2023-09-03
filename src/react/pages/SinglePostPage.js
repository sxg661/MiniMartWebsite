import { useSearchParams } from "react-router-dom";
import GetPostWithId from "../../database/GetPostWithID";

function SinglePostPage() {
    const [searchParams] = useSearchParams();

    GetPostWithId(searchParams.get('id'));

    return (
        <div className="test">
            A Post with id {searchParams.get('id')}
        </div>
    );
    }
  
  export default SinglePostPage;