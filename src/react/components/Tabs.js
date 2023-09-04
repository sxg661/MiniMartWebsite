import Tab from "./Tab";

function Tabs() {
    return (
        <div className="tab-container">
            <Tab text = "Home" selected = {true}/>
            <Tab text = "Dev Log"/>
            <Tab text = "Youtube"/>
        </div>
    );
  }

export default Tabs;