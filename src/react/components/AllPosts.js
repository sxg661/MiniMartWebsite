import { useState, useEffect } from "react"
import GetPostInDateRange from "../../database/GetPostsInDateRange";

function addDays (date, numberOfDays) {
    const dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + numberOfDays);
    return dateCopy;
}

export default function AllPosts(props) {
    const postsPerPage = 2;
    const timeIntervalToSearchInDays = 7;

    const [latestDateShown, setLatestDateShown] = useState(null);
    const [earliestStateShown, setEarliesttDateShown] = useState(null);

    const [postsToShow, setPostsToShow] = useState([])

    function PostLoadCallback(postDatas) {
    }

    function LoadInitialPosts(){
        setPostsToShow([])
        
        const todayDate = new Date();
        todayDate.setHours(0,0,0);

        const endDate = addDays(todayDate, 1);
        const startDate = addDays(endDate, -timeIntervalToSearchInDays);

        GetPostInDateRange(startDate , endDate, (postDatas) => PostLoadCallback(postDatas));
    }
    useEffect(() => LoadInitialPosts(), [])

    return(
        <div className="posts-container">
        </div>
    )
}