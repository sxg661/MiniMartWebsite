import { useState } from "react";
import { format } from "react-string-format";
import Tab from "./Tab";

function Tabs() {
    const originalTabs = [
        {key : "1", id : 1, tabName : "Home", selected : true},
        {key : "2", id : 2, tabName : "Dev Log", selected : false},
        {key : "3", id: 3, tabName : "Youtube", selected : false},
    ]

    const [tabs, setTabs] = useState(originalTabs)

    const callBack = id => {
        const time = new Date().getTime()
        const newTabs = originalTabs.map(
            tab => ({key: format("{0}_{1}",tab.key, time), id : tab.id, tabName : tab.tabName, selected : tab.id === id})
        );
        setTabs(newTabs);
    }

    const renderTabs = (tabsToRender) => tabsToRender.map(
        tab => <Tab 
            key = {tab.key}
            text = {tab.tabName}
            selected = {tab.selected}
            id = {tab.id}
            callBack = {callBack}/>
    )
    return (
        <div className="tab-container">
            {renderTabs(tabs)}
        </div>
    );
  }

export default Tabs;