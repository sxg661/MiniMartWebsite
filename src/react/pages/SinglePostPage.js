import { useSearchParams } from "react-router-dom";

function SinglePostPage() {
    const [searchParams] = useSearchParams();

    return (
        <div className="test">
            A Post with id {searchParams.get('id')}
        </div>
    );
    }
  
  export default SinglePostPage;