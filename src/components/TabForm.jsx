import React, { useState } from 'react'
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is atleast 2 character long";
        }

        if (!data.age || data.age < 18) {
          err.age = "Age should be atleast 18";
        }

        if (!data.email || data.email.length < 2) {
          err.email = "Email is atleast 2 character long";
        }

        setErrors(err);
        return err.name || err.email || err.age ? false : true;
      }
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 2) {
          err.interests = "Select atleast 2 interests";
        }

        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        const err = {};
        if (data.language === "") {
          err.language = "Select 1 Language";
        }

        setErrors(err);
        return err.language ? false : true;
      },
    }
  ]

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const SelectedComponent = tabs[activeTabIndex].component;

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    language: "",
    theme: "dark",
  })

  const [errors, setErrors] = useState({})

  const handleNextClick = () => {
    if (tabs[activeTabIndex].validate()) {
      setActiveTabIndex(activeTabIndex + 1);
    }
  }

  const handlePrevClick = () => {
    setActiveTabIndex(activeTabIndex - 1);
  }

  const handleSubmitClick = () => {
    if (tabs[activeTabIndex].validate()) {
      // api call
      console.log("data", data);
      setData({
        name: "",
        age: "",
        email: "",
        interests: [],
        theme: "dark",
        language: "",
      });
      setActiveTabIndex(0);
    }
  }

  // const handleSubmitClick = async () => {
  //   if (tabs[activeTabIndex].validate()) {
  //     try {
  //       console.log("Data to be sent:", data);

  //       const response = await fetch('https://dummyapi.com/submit', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       if (response.ok) {
  //         const result = await response.json();
  //         console.log("API response:", result);

  //         setData({
  //           name: "",
  //           age: "",
  //           email: "",
  //           interests: [],
  //           theme: "dark",
  //           language: "",
  //         });

  //         setActiveTabIndex(0);

  //         alert("Form submitted successfully!");
  //       } else {
  //         // Handle API error
  //         console.error("Error submitting form:", response.statusText);
  //         alert("There was an error submitting the form. Please try again.");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("Network error. Please check your connection and try again.");
  //     }
  //   }
  // }


  return (
    <div>
      <div className='tabs'>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className='tab'
            onClick={() => tabs[activeTabIndex].validate() && setActiveTabIndex(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className='content'>
        <SelectedComponent data={data} setData={setData} errors={errors} />
      </div>

      <div>
        {activeTabIndex > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTabIndex < tabs.length - 1 && <button onClick={handleNextClick}>Next</button>}
        {activeTabIndex === tabs.length - 1 && <button onClick={handleSubmitClick}>Submit</button>}
      </div>

    </div>
  )
}

export default TabForm