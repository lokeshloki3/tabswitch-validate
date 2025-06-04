import React from 'react'

const Profile = ({ data, setData, errors }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value, }))
  }

  return (
    <div>
      <div>
        {/* htmlFor is for ID */}
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={data.name}
          onChange={handleChange}
        />
        {errors.name && <span className="errors">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          value={data.age}
          onChange={handleChange}
        />
        {errors.age && <span className="errors">{errors.age}</span>}

      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && <span className="errors">{errors.email}</span>}
      </div>
    </div>
  )
}

export default Profile