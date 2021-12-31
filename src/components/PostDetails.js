

import moment from 'moment';
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import PostContext from '../context/PostContext';
import CommentForm from './CommentForm';
import Comments from './Comments';
import DeletePostModal from './DeletePostModal';

const PostDetails = () => {
  const { commentDetail, setParameter } = useContext(PostContext)
  const param = useParams()

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setParameter(param.id)
    }
    return () => {
      isMounted = false
    }
  }, [param])

  return (
    <>
      <h2 className="ui header">{commentDetail.title}</h2>
      <p>{moment(commentDetail.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <div className="ui buttons">
        <Link to={`/posts/${param.id}/edit`} className="ui blue button">edit</Link>
        <DeletePostModal />

      </div>
      <p>{commentDetail.content}</p>

      <Comments />
      <CommentForm />
    </>
  )
}

export default PostDetails
