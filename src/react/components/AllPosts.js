import { useState, useEffect } from "react"
import GetPostInDateRange from "../../database/GetPostsInDateRange";
import GetMostRecentPostDate from "../../database/GetMostRecentPostDate";
import GetEarliestPostDate from "../../database/GetEarliestPostDate";
import Post from "./Post";
import EarlierLaterButtons from "./EarlierLaterButtons";
import LoadingSpinner from "./LoadingSpinner";
import { firebaseConfig } from "../../database/firebase";

function addDays(date, numberOfDays) {
    const dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + numberOfDays);
    return dateCopy;
}

function addMilliseconds(date, numberOfMilliseconds) {
    const dateCopy = new Date(date);
    dateCopy.setMilliseconds(dateCopy.getMilliseconds() + numberOfMilliseconds);
    return dateCopy;
}

function getTomorrowMidnight(){
    const todayDate = new Date();
    todayDate.setHours(0,0,0);
    return addDays(todayDate, 1);
}

export default function AllPosts(props) {
    let nextKey = 0;

    const postsPerPage = 5;
    const timeIntervalToSearchInDays = 14;

    const [postsToShow, setPostsToShow] = useState([])

    const [enableLaterButton, setEnableLaterButton] = useState(true);
    const [enableEarlierButton, setEnableEarlierButton] = useState(true);

    const [loadingSpinnerVisible, setLoadingSpinnerVisible] = useState(true);

    function GetMostRecentPostDateShown(posts){
        return posts[0].time.toDate();
    }

    function GetEarliestPostDateShown(posts){
        return posts[posts.length - 1].time.toDate();
    }

    function PostsCurrentlyOnPage(){
        return !(postsToShow.length === 0);
    }

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
            DisplayPostsInBuffer(postsToShowBuffer);
        }
    }

    async function DisplayPostsInBuffer(postsToShowBuffer){
        postsToShowBuffer.forEach((post) => {
            post.key = `${nextKey++}`;
        });
        setPostsToShow(postsToShowBuffer);

        if(postsToShowBuffer.length) {      
            const mostRecentPostDate = await GetMostRecentPostDate();
            const earliestPostDate = await GetEarliestPostDate();
            setEnableEarlierButton(GetEarliestPostDateShown(postsToShowBuffer) > earliestPostDate);
            setEnableLaterButton(GetMostRecentPostDateShown(postsToShowBuffer) < mostRecentPostDate);
        }
        else {
            setEnableEarlierButton(false);
            setEnableLaterButton(false);
        }

        postsToShowBuffer = [];
        setLoadingSpinnerVisible(false);
    }

    function LoadInitialPosts(){
        const endDate = getTomorrowMidnight();
        const startDate = addDays(endDate, -timeIntervalToSearchInDays);

        setEnableLaterButton(false);
        setEnableEarlierButton(false);
        setLoadingSpinnerVisible(true);

        GetPostInDateRange(startDate , endDate, (startDate, endDate, postDatas) => PostLoadCallback([], startDate, endDate, postDatas, false));
    }

    useEffect(() => LoadInitialPosts(), [])

    function HandleEalierButtonClick() {
        const endDate = GetEarliestPostDateShown(postsToShow);
        const startDate = addDays(endDate, -timeIntervalToSearchInDays);

        setEnableLaterButton(false);
        setEnableEarlierButton(false);
        setLoadingSpinnerVisible(true);
        setPostsToShow([]);

        GetPostInDateRange(startDate , endDate, (startDate, endDate, postDatas) => PostLoadCallback([], startDate, endDate, postDatas, false));
    }

    function HandleLaterButtonClick() {
        const startDate = addMilliseconds(GetMostRecentPostDateShown(postsToShow), 1);
        const endDate = addDays(startDate, timeIntervalToSearchInDays);

        setEnableLaterButton(false);
        setEnableEarlierButton(false);
        setLoadingSpinnerVisible(true);
        setPostsToShow([]);

        GetPostInDateRange(startDate , endDate, (startDate, endDate, postDatas) => PostLoadCallback([], startDate, endDate, postDatas, true));
    }

    const RenderPosts = () => postsToShow.map(
        post => <Post key={post.key} postData={post} IsSinglePost={false}/>
    )

    function RenderLoadingSpinner() {
        if(!PostsCurrentlyOnPage() && loadingSpinnerVisible){
            return <LoadingSpinner/>
        }
    }

    const RenderEarlierLaterButtons = () => 
        <EarlierLaterButtons 
            enableLaterButton={enableLaterButton}
            enableEarlierButton={enableEarlierButton}
            handleLaterButtonClick={HandleLaterButtonClick}
            handleEalierButtonClick={HandleEalierButtonClick}/>

    return(
        <div className="post-container">
            {RenderEarlierLaterButtons()}
            {RenderLoadingSpinner()}
            {RenderPosts()}
            {RenderEarlierLaterButtons()}
        </div>
    )
}