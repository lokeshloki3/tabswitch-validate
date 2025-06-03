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

  const handleNextClick = () => {
    setActiveTab(activeTab + 1);
  }

  const handlePrevClick = () => {
    setActiveTab(activeTab - 1);
  }

  const handleSubmitClick = () => {
    console.log('data', data)
  }

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
        <SelectedComponent data={data} setData={setData} />
      </div>

      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && <button onClick={handleNextClick}>Next</button>}
        {activeTab === tabs.length - 1 && <button onClick={handleSubmitClick}>Submit</button>}
      </div>

    </div>
  )
}

export default TabForm