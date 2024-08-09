import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tab" onClick={() => handleTabClick("tab1")}>
        HTML
      </div>
      <div className="tab" onClick={() => handleTabClick("tab2")}>
        CSS
      </div>
      <div className="tab" onClick={() => handleTabClick("tab3")}>
        Javascript
      </div>

      {activeTab === "tab1" && <div className="panel">Content for Tab 1</div>}
      {activeTab === "tab2" && <div className="panel">Content for Tab 2</div>}
      {activeTab === "tab3" && <div className="panel">Content for Tab 3</div>}
    </div>
  );
};

export default Tabs;
