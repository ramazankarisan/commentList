import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { api } from '../api'


const INITIAL_POST = { title: '', content: '' }

const PostForm = () => {

  const navigate = useNavigate()
  const [post, setPost] = useState(INITIAL_POST)
  const [error, setError] = useState('')

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const onFromSubmit = (e) => {
    e.preventDefault();
    setError('')
    api()
      .post(`/posts`, post)
      .then(response => navigate("/")
      )
      .catch(error => setError('Title and Content are required!'));
    setPost(INITIAL_POST);


  }
  return (
    <>
      {error.length > 0 && <div class="ui error message">
        <div class="header">Error</div>
        <p>{error}</p>
      </div>}

      <form onSubmit={onFromSubmit} className="ui form">
        <div className="field">
          <label>Post Heading</label>

          <input onChange={onInputChange} name="title" placeholder='title' value={post.title} type="text" />

        </div>
        <div className="field">
          <textarea onChange={onInputChange} name="content" value={post.content} placeholder="content" rows="3"></textarea>
        </div>
        <div><button type="submit" className="ui primary button">Send</button><button className="ui red button">Cancel</button></div>
      </form>
    </>
  )
}

export default PostForm
