import { useState } from "react";
import { format } from "react-string-format";
import Tabs from "../components/Tabs";
import GetPostInDateRange from "../../database/GetPostsInDateRange";

function addWeeks(date, weeks) {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() + 7 * weeks);
  return dateCopy;
}

function MainPage() {
    const [firstTabSelected, setFirstTabSelected] = useState(true);

    const getFirstTabSelectedClass = () => firstTabSelected ? "main-page-content-first-tab-selected" : "";

    GetPostInDateRange(new Date('September 4, 2023 00:00:00') , new Date('September 9, 2023 03:24:00'), console.log);

    return (
      <div className="main-page">
        <Tabs firstTabSelectedCallback={setFirstTabSelected}/>
        <div className={format("main-page-content {0}", getFirstTabSelectedClass())}>
        </div>
      </div>
    );
  }

export default MainPage;