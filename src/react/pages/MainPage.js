import { useState } from "react";
import { format } from "react-string-format";
import Tabs from "../components/Tabs";
import AllPosts from "../components/AllPosts";

function MainPage() {
    const [firstTabSelected, setFirstTabSelected] = useState(true);

    const getFirstTabSelectedClass = () => firstTabSelected ? "main-page-content-first-tab-selected" : "";

    return (
      <div className="main-page">
        <Tabs firstTabSelectedCallback={setFirstTabSelected}/>
        <div className={format("main-page-content {0}", getFirstTabSelectedClass())}>
          <AllPosts/>
        </div>
      </div>
    );
  }

export default MainPage;