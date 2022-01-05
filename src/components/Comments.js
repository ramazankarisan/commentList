
import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PostContext from '../context/PostContext'
import { commentModalClicked, commentModalOnClick, commentModalOpener } from '../store/actions/commentActions';
import CommentModal from './CommentModal';

const Comments = () => {
  // const { setOpen, dispatch } = useContext(PostContext);

  const comments = useSelector(state => state.post.postDetail.comments);
  const dispatch = useDispatch()

  return (
    <>
      <h3>Comments
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
                    // dispatch({ type: 'MODAL_HELPER', payload: { id: comment.id, index: index } })
                    // setOpen(true)
                    dispatch(commentModalOpener(comment))
                    // dispatch(commentModalClicked(comment.id))

                  }} className="ui blue button">edit</button>
                  <button className="ui red button">delete</button>
                  <CommentModal />

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
