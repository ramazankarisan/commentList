import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bodyOnChange, commentFormInitial, displayNameOnChange } from '../store/actions/commentActions'
import { handleCommentSubmit } from '../store/actions/postActions'

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const commentBody = useSelector(state => state.comment)

  return (
    <>
      <h3>Leave a comment</h3>
      <form className="ui form" onSubmit={(e) => {
        dispatch(handleCommentSubmit(e, id, commentBody));
        dispatch(commentFormInitial());

      }}>
        <div className="ui mini icon input">
          <input name='display_name' onChange={(e) => dispatch(displayNameOnChange(e))} type="text" placeholder="Your Name" value={commentBody.display_name} />
        </div>
        <textarea name='body' value={commentBody.body} onChange={(e) => dispatch(bodyOnChange(e))} placeholder="your comment" rows="3"></textarea>
        <button className="ui blue button" type='submit'>send your comment</button>
      </form>
    </>
  )
}

export default CommentForm
