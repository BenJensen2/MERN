import React, {useState} from 'react';

const TabForm = ({tabs, setTabs}) => {

//STATE DATA
  const [label, setLabel] = useState("");
  const [context, setContext] = useState("");

// HANDLERS
  const labelHandler = (e) => {
    setLabel(e.value.target)
  };

  const contextHandler = (e) => {
    setContext(e.value.target)
  };

}