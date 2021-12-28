import React, { useContext } from 'react'
import PostContext from '../context/PostContext'

const Comments = () => {
  const { comments } = useContext(PostContext)
  return (
    <>
      <h3>yorumlar
      </h3>
      {comments.map(comment => {
        return (
          <div className="ui relaxed list" key={comment.id}>
            <div className="item">
              <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" alt=" " />
              <div className="content">
                <a className="header">{comment.display_name}</a>
                <div className="description">{comment.body}</div>
              </div>
            </div>
          </div>
        )
      }
      )}
    </>
  )
}

export default Comments
