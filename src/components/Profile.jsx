import React from 'react'

const Profile = ({ data, setData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData, [name]: value,
    }))
  }

  return (
    <div>
      <div className='fields'>
        {/* htmlFor is for ID */}
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className='fields'>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          value={data.age}
          onChange={handleChange}
        />
      </div>
      <div className='fields'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          value={data.email}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Profile