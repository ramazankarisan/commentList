
import React, { useContext, useState } from 'react'
import PostContext from '../context/PostContext'
import CommentModal from './CommentModal';

const Comments = () => {
  const { comments, setOpen } = useContext(PostContext);
  const [modalHelper, setModalHelper] = useState({ id: '', index: '' })


  return (
    <>
      <h3>yorumlar
      </h3>
      {comments.map((comment, index) => {
        return (
          <div className="ui relaxed list" key={comment.id}>
            <div className="item">
              <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" alt=" " />
              <div className="content">
                <a className="header">{comment.display_name}</a>
                <div className="description">{comment.body}</div>
                <div className="ui buttons">
                  <button onClick={() => {
                    setModalHelper({ id: comment.id, index: index })
                    setOpen(true)
                    console.log(modalHelper)
                  }} className="ui blue button">edit</button>
                  <button className="ui red button">delete</button>
                  <CommentModal id={comment.id} index={index} modalHelper={modalHelper} />

                </div>
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
