import { useEffect, useState } from "react";
import { format } from "react-string-format";
import Tabs from "../components/Tabs";
import AllPosts from "../components/AllPosts";
import AboutMe from "../components/AboutMe";
import Youtube from "../components/Youtube";

function MainPage() {
    const [tabIndexSelected, setTabIndexSelected] = useState(1);

    const getFirstTabSelectedClass = () => tabIndexSelected === 1 ? "main-page-content-first-tab-selected" : "";

    function GetContent(){
      if(tabIndexSelected === 1){
        return <AllPosts/>
      }
      if(tabIndexSelected === 2){
        return <AboutMe/>
      }
      if(tabIndexSelected === 3){
        return <Youtube/>
      }
      
      return <div>I need to put some content here</div>
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