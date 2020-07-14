import React from "react";
import Tab from "./Tabs";

const TabDisplay = ({ tabs, setTabs }) => {
  //import data adds background & color style to data set

  const tabDisplayed = 0;
  const tabStyle = {
    background: "none",
    color: "black",
  };

  // HANDLERS
  const tabHandler = (e,idx) => {
    let newTabs = [...tabs]; //creates a copy
    console.log(newTabs)
    console.log(idx)
    const selectedTab = Object.assign({}, newTabs[idx])  // allows it to be mutable
    console.log(selectedTab)
    // const selectedStyle = Object.assign({},newTabs[i].style)  // allows style to be mutable
    // selectedStyle.background = "black";
    // selectedStyle.color = "white";
    // selectedTab.style = selectedStyle;
    // newTabs[i] = selectedTab;
    // setTabs(newTabs);
  }
    



  return (
    <body>  {/* onload works for body or image */}
      <div className="tabs">
        {tabs.map((tab, i) => (
          <section className="tab" key={i} style={tabStyle} onClick={tabHandler}>
              <Tab
                tab = {tab}
                idx = {i}
                tabHandler = {tabHandler}
              />
            {/* <label className='labeltab'> */}
            {tab.label} {i}
            {/* </label> */}
          </section>
        ))}
      </div>
      <div className="context">{tabs[tabDisplayed].context}</div>
    </body>
  );
};

export default TabDisplay;
