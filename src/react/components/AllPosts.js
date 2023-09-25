import { useState, useEffect } from "react"
import GetPostInDateRange from "../../database/GetPostsInDateRange";
import Post from "./Post";

function addDays(date, numberOfDays) {
    const dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + numberOfDays);
    return dateCopy;
}

function getTomorrowMidnight(){
    const todayDate = new Date();
    todayDate.setHours(0,0,0);

    return addDays(todayDate, 1);
}

export default function AllPosts(props) {
    let initialLoad = true;

    let nextKey = 0;

    const postsPerPage = 4;
    const timeIntervalToSearchInDays = 28;

    let latestDateShown = null;
    let earliestDateShown = null;

    const [postsToShow, setPostsToShow] = useState([])

    function PostLoadCallback(postsToShowBuffer, startDate, endDate, postDatas, lookForwards) {
        const amountNeeded = postsPerPage - postsToShowBuffer.length;

        const additonalPostsToShow = lookForwards ? 
            postDatas.slice(0, amountNeeded) :
            postDatas.slice(Math.max(postDatas.length - amountNeeded, 0));

        const additonalPostsToShowMostRecentFirst = additonalPostsToShow.reverse();

        postsToShowBuffer = lookForwards ? 
            additonalPostsToShow.concat(postsToShowBuffer) :
            postsToShowBuffer.concat(additonalPostsToShowMostRecentFirst);

        const firstPostReached = postsToShowBuffer.length && postsToShowBuffer[postsToShowBuffer.length - 1].isFirstPost;
        const searchRangeOverlapsWithFuture = endDate > new Date();

        const noMorePostsToSearch = lookForwards ? searchRangeOverlapsWithFuture : firstPostReached;

        if(!noMorePostsToSearch && postsToShowBuffer.length < postsPerPage){
            const newStartDate = lookForwards ? endDate : addDays(startDate, -timeIntervalToSearchInDays-7);
            const newEndDate = lookForwards ? addDays(endDate, timeIntervalToSearchInDays) : startDate;

            GetPostInDateRange(newStartDate, newEndDate, (startDate, endDate, postDatas) =>
                PostLoadCallback(postsToShowBuffer, startDate, endDate, postDatas, lookForwards));
        }
        else {
            if(postsToShowBuffer.length) {
                latestDateShown = postsToShowBuffer[0].time.toDate();
                earliestDateShown = postsToShowBuffer[postsToShowBuffer.length - 1].time.toDate();
            }
            postsToShowBuffer.forEach((post) => {
                post.key = `${nextKey++}`;
            });
            DisplayPostsInBuffer(postsToShowBuffer);
        }
    }

    function DisplayPostsInBuffer(postsToShowBuffer){
        if(postsToShowBuffer.length) {
            latestDateShown = postsToShowBuffer[0].time.toDate();
            earliestDateShown = postsToShowBuffer[postsToShowBuffer.length - 1].time.toDate();
        }
        postsToShowBuffer.forEach((post) => {
            post.key = `${nextKey++}`;
        });
        setPostsToShow(postsToShowBuffer);
        postsToShowBuffer = [];
    }

    function LoadInitialPosts(){
        const endDate = addDays(getTomorrowMidnight(), -50);
        const startDate = addDays(endDate, -timeIntervalToSearchInDays);

        GetPostInDateRange(startDate , endDate, (startDate, endDate, postDatas) => PostLoadCallback([], startDate, endDate, postDatas, true));
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