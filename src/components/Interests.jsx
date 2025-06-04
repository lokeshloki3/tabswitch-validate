export default function Interests({ data, setData, errors }) {
  const { interests } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((item) => item !== e.target.name),
    }));
  };

  // console.log("interests", interests);

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="javaScript"
          checked={interests.includes("javaScript")}
          onChange={handleChange}
        />
        <label>JavaScript</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="java"
          checked={interests.includes("java")}
          onChange={handleChange}
        />
        <label>Java</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
          onChange={handleChange}
        />
        <label>Music</label>
      </div>
      {errors.interests && <span className="errors">{errors.interests}</span>}
    </div>
  );
}
