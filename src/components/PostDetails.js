

import moment from 'moment';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostContext from '../context/PostContext';
import CommentForm from './CommentForm';
import Comments from './Comments';

const PostDetails = () => {
  const { commentDetail, setParameter } = useContext(PostContext)
  const param = useParams()

  useEffect(() => {
    setParameter(param.id)
  }, [param])



  return (
    <>
      <h2 className="ui header">{commentDetail.title}</h2>
      <p>{moment(commentDetail.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>{commentDetail.content}</p>

      <Comments />
      <CommentForm />
    </>
  )
}

export default PostDetails
