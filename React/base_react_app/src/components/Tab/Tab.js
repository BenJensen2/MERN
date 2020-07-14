import React, {useState} from "react";

const Tab = ({tab, idx, tabHandler}) => {

  return (
    <div className="tab" key={i} style={tabStyle} onClick={tabHandler}>
              <Tab
                tab = {tab}
                idx = {i}
                tabHandler = {tabHandler}
              />
            {/* <label className='labeltab'> */}
            {tab.label} {i}
            {/* </label> */}
          </div>
  )

}