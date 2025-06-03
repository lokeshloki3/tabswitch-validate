import React from 'react'

const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked ?
        [...prevState.interests, e.target.name]
        : prevState.interests.filter((item) => item != e.target.name)
    }))
  }

  return (
    <div>
      <div>
        <input
          type='checkbox'
          name='java'
          checked={interests.includes("java")}
          onChange={handleChange}
        />
        <label>Java</label>
      </div>

      <div>
        <input
          type='checkbox'
          name='javaScript'
          checked={interests.includes("javaScript")}
          onChange={handleChange}
        />
        <label>javaScript</label>
      </div>

      <div>
        <input
          type='checkbox'
          name='music'
          checked={interests.includes("music")}
          onChange={handleChange}
        />
        <label>music</label>
      </div>
    </div>
  )
}

export default Interests