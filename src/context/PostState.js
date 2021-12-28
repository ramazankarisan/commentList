import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostContext from './PostContext'

const PostState = (props) => {

  const initial_comment = { display_name: '', body: '' };
  const [commentBody, setCommentBody] = useState(initial_comment)
  const [commentDetail, setCommentDetail] = useState({})
  const [comments, setComments] = useState([])
  const [parameter, setParameter] = useState('')


  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${parameter}/comments`, commentBody)
      .then(response => setComments([...comments, response.data]))
      .catch(error => console.log(error))
    setCommentBody(initial_comment)
  };

  const handleOnChange = (e) => {
    setCommentBody({ ...commentBody, [e.target.name]: e.target.value })
  };

  useEffect(() => {
    axios.all([
      axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${parameter}`),
      axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${parameter}/comments`)
    ])
      .then(responses => {

        setCommentDetail(responses[0].data);
        setComments(responses[1].data)
      })
      .catch(error => console.log(error))
  }, [parameter]);

  return (
    <PostContext.Provider value={{ handleCommentSubmit, handleOnChange, comments, commentDetail, setCommentDetail, commentBody, setParameter }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState
