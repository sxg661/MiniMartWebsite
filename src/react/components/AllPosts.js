import { useState, useEffect } from "react"
import GetPostInDateRange from "../../database/GetPostsInDateRange";
import Post from "./Post";

function addDays(date, numberOfDays) {
    const dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + numberOfDays);
    return dateCopy;
}

export default function AllPosts(props) {
    let initialLoad = true;

    let nextKey = 0;

    const postsPerPage = 4;
    const timeIntervalToSearchInDays = 28;

    let latestDateShown = null;
    let earliestDateShown = null;

    const [postsToShow, setPostsToShow] = useState([])
    let postsToShowBuffer = [];

    function PostLoadCallback(startDate, postDatas, lookForwards) {
        const amountNeeded = postsPerPage - postsToShowBuffer.length;

        const additonalPostsToShow = lookForwards ? 
            postDatas.slice(0, amountNeeded) :
            postDatas.slice(Math.max(postDatas.length - amountNeeded, 0));

        const additonalPostsToShowMostRecentFirst = additonalPostsToShow.reverse();

        postsToShowBuffer = lookForwards ? 
            additonalPostsToShow.concat(postsToShowBuffer) :
            postsToShowBuffer.concat(additonalPostsToShowMostRecentFirst);

        const isFirstPost = postsToShowBuffer.length && postsToShowBuffer[postsToShowBuffer.length - 1].isFirstPost

        if(!isFirstPost && postsToShowBuffer.length < postsPerPage){
            const newStartDate = addDays(startDate, -7);
            const newEndDate = startDate;

            GetPostInDateRange(newStartDate , newEndDate, (startDate, _, postDatas) => PostLoadCallback(startDate, postDatas, lookForwards));
        }
        else {
            if(postsToShowBuffer.length){
                latestDateShown = postsToShowBuffer[0].time.toDate();
                earliestDateShown = postsToShowBuffer[postsToShowBuffer.length - 1].time.toDate();
            }
            postsToShowBuffer.forEach((post) => {
                post.key = `${nextKey++}`;
            })
            setPostsToShow(postsToShowBuffer);
        }
    }

    function LoadInitialPosts(){
        setPostsToShow([])
        postsToShowBuffer = [];
        
        const todayDate = new Date();
        todayDate.setHours(0,0,0);

        const endDate = addDays(todayDate, 1);
        const startDate = addDays(endDate, -timeIntervalToSearchInDays);

        GetPostInDateRange(startDate , endDate, (startDate, _, postDatas) => PostLoadCallback(startDate, postDatas, false));
    }
    useEffect(() => LoadInitialPosts(), [])

    const RenderPosts = () => postsToShow.map(
        post => <Post key={post.key} postData={post} IsSinglePost={false}/>
    )

    return(
        <div className="post-container">
            {RenderPosts()}
        </div>
    )
}