

import moment from 'moment';
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
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
      <div className="ui buttons">
        <Link to={`/posts/${param.id}/edit`} className="ui blue button">edit</Link>
        <button className="ui red button">delete</button>

      </div>
      <p>{commentDetail.content}</p>

      <Comments />
      <CommentForm />
    </>
  )
}

export default PostDetails
