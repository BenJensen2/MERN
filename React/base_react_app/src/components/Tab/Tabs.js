import React, {useState} from 'react';
import TabDisplay from './TabDisplay'

const Tabs = (props) => {
  var data = [
    {
      label: "Tab 1",
      context: "Tab 1 content is showing"
    },
    {
    label: "Tab 2",
    context: "Tab 2 content is showing"
    },
    {
      label: "Tab 3",
      context: "Tab 3 content is showing"
    }]

    console.log("dataHandler")
    let newTabs = [...data]; //creates a copy
    newTabs.map((tab) => //maps inactive style to all tabs
        (tab["style"] = {
          background: "none",
          color: "black",
        })
    );
    console.log(newTabs);

  
  const [tabs, setTabs] = useState(data)

  console.log("this new thing", tabs)
  
  return(
  <div>
    <TabDisplay 
      tabs = {tabs}
      setTabs = {setTabs}
    />
  </div>
  )
}

export default Tab;