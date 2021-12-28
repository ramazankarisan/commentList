import React, { useContext } from 'react'
import PostContext from '../context/PostContext'


const CommentForm = () => {
  const { handleCommentSubmit, handleOnChange, commentBody } = useContext(PostContext)

  return (
    <>
      <h3>yorum yaz</h3>
      <form className="ui form" onSubmit={handleCommentSubmit}>
        <div className="ui mini icon input">
          <input name='display_name' onChange={handleOnChange} type="text" placeholder="Your Name" value={commentBody.display_name} />
        </div>
        <textarea name='body' value={commentBody.body} onChange={handleOnChange} placeholder="your comment" rows="3"></textarea>
        <button className="ui blue button" type='submit'>yorum gönder</button>
      </form>
    </>
  )
}

export default CommentForm
