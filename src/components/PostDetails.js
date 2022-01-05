
import moment from 'moment';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { bringPost } from '../store/actions/postActions';
import CommentForm from './CommentForm';
import Comments from './Comments';
import DeletePostModal from './DeletePostModal';

const PostDetails = () => {

  const param = useParams();
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postDetail)
  const comment = useSelector(state => state.comment.comment)

  useEffect(() => {
    dispatch(bringPost(param.id))
  }, [param.id, comment]);


  return (
    <>
      <h2 className="ui header">{postList.title}</h2>
      <p>{moment(postList.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <div className="ui buttons">
        <Link to={`/posts/${param.id}/edit`} className="ui blue button">edit</Link>
        <DeletePostModal id={param.id} />

      </div>
      <p>{postList.content}</p>

      <Comments />
      <CommentForm id={param.id} />
    </>
  )
}

export default PostDetails
