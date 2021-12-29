import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'
import PostContext from '../context/PostContext'



const PostEditForm = () => {
  const navigate = useNavigate()
  const { parameter, commentDetail } = useContext(PostContext);
  const [error, setError] = useState('')
  const [post, setPost] = useState({ title: commentDetail.title || "", content: commentDetail.content || "" })

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError('')
    api()
      .put(`/posts/${parameter}/`, post)
      .then(response => navigate(`/posts/${parameter}`)
      )
      .catch(error => setError('Title and Content are required!'));
    setPost({ title: "", content: "" });
  };


  return (
    <>
      {error.length > 0 && <div class="ui error message">
        <div class="header">Error</div>
        <p>{error}</p>
      </div>}

      <form onSubmit={onFormSubmit} className="ui form">
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

export default PostEditForm
