import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { api } from '../api';
import PostContext from './PostContext'

const PostState = (props) => {

  const initial_comment = { display_name: '', body: '' };
  const [commentBody, setCommentBody] = useState(initial_comment)
  const [commentDetail, setCommentDetail] = useState({})
  const [comments, setComments] = useState([])
  const [parameter, setParameter] = useState('')
  const [open, setOpen] = useState(false)

  const reducer = (state, action) => {
    switch (action.type) {
      case 'MODAL_HELPER':
        return action.payload;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {})


  const [post, setPost] = useState(
    { display_name: '', body: '' }
  )
  useEffect(() => {
    setPost((comments[state.index]?.id) ? { display_name: comments[state.index].display_name, body: comments[state.index].body } : ' error undefined')
  }, [state])

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    api().post(`/posts/${parameter}/comments`, commentBody)
      .then(response => setComments([...comments, response.data]))
      .catch(error => console.log(error))
    setCommentBody(initial_comment)
  };

  const handleOnChange = (e) => {
    setCommentBody({ ...commentBody, [e.target.name]: e.target.value })
  };

  useEffect(() => {
    axios.all([
      api().get(`/posts/${parameter}`),
      api().get(`/posts/${parameter}/comments`)
    ])
      .then(responses => {

        setCommentDetail(responses[0].data);
        setComments(responses[1].data)
      })
      .catch(error => console.log(error))
  }, [parameter, commentDetail]);


  return (
    <PostContext.Provider value={{ handleCommentSubmit, handleOnChange, comments, commentDetail, setCommentDetail, commentBody, setParameter, parameter, open, setOpen, state, dispatch, post, setPost }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState
