
import React, { useState } from 'react'
import axios from 'axios'

function Createblog() {

  const [blog, setBlog] = useState({
    title: '',
    description: '',
    category: '',
    isPublished: false,
    isDraft: false
  })



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/createblog', blog)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }




  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={blog.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={blog.category}
            onChange={handleChange}
            />
        </div>
          
        {/* </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div> */}
        <div>
          <label htmlFor="isPublished">Is Published:</label>
          <input
            type="checkbox"
            id="isPublished"
            name="isPublished"
            checked={blog.isPublished}
            onChange={(e) => setBlog({ ...blog, isPublished: e.target.checked })}
          />
        </div>
        <div>
          <label htmlFor="isDraft">Is Draft:</label>
          <input
            type="checkbox"
            id="isDraft"
            name="isDraft"
            checked={blog.isDraft}
            onChange={(e) => setBlog({ ...blog, isDraft: e.target.checked })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Createblog