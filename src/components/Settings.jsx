import { useState } from "react";

const Settings = ({ data, setData, errors }) => {
  const { theme, language } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setData((prevState) => ({
    //   ...prevState,
    //   theme: e.target.name,
    // }));
  };
  return (
    <div>
      <div>
        <label>Language</label>
        <select name="language" value={language} onChange={handleChange}>
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        {/* {errors.language && <span className="errors">{errors.language}</span>} */}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          Dark
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={handleChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
