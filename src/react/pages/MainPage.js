import { useEffect, useState } from "react";
import { format } from "react-string-format";
import Tabs from "../components/Tabs";
import AllPosts from "../components/AllPosts";

function MainPage() {
    const [tabIndexSelected, setTabIndexSelected] = useState(1);

    const getFirstTabSelectedClass = () => tabIndexSelected === 1 ? "main-page-content-first-tab-selected" : "";

    function GetContent(){
      if(tabIndexSelected === 1){
        return <AllPosts/>
      }
      else {
        return <div>I need to put some content here</div>
      }
    }

    return (
      <div className="main-page">
        <Tabs tabSelectedCallback={setTabIndexSelected}/>
        <div className={format("main-page-content {0}", getFirstTabSelectedClass())}>
          {GetContent()}
        </div>
      </div>
    );
  }

export default MainPage;