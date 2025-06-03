import React, { useState } from 'react'
import { tabs } from "../tabs";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const SelectedComponent = tabs[activeTab].component;

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
  })

  return (
    <div>
      <div className='tabs'>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className='tab'
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className='content'>
        <SelectedComponent data={data} setData={setData}/>
      </div>
    </div>
  )
}

export default TabForm