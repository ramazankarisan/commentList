import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CommentDetails = () => {
  const [commentDetail, setCommentDetail] = useState({})
  const param = useParams();

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${param.id}`)
      .then(response => setCommentDetail(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h2 className="ui header">{commentDetail.title}</h2>
      <p>{moment(commentDetail.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>{commentDetail.content}</p>
    </>
  )
}

export default CommentDetails
