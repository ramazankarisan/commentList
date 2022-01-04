import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import PostContext from '../context/PostContext'
import { bodyOnChange, displayNameOnChange, handleOnChange } from '../store/actions/commentActions'


const CommentForm = ({ id }) => {
  const { handleCommentSubmit, } = useContext(PostContext)

  const dispatch = useDispatch();
  const commentBody = useSelector(state => state.comment)
  // const handleOnChange = (e) => {
  //   setCommentBody({ ...commentBody, [e.target.name]: e.target.value })
  // };
  return (
    <>
      <h3>Leave a comment</h3>
      <form className="ui form" onSubmit={(e) => handleCommentSubmit(e, id, commentBody)}>
        <div className="ui mini icon input">
          <input name='display_name' onChange={(e) => dispatch(displayNameOnChange(e))} type="text" placeholder="Your Name" value={commentBody.display_name} />
        </div>
        <textarea name='body' value={commentBody.body} onChange={(e) => dispatch(bodyOnChange(e))} placeholder="your comment" rows="3"></textarea>
        <button className="ui blue button" type='submit'>yorum gönder</button>
      </form>
    </>
  )
}

export default CommentForm
