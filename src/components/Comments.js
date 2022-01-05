
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { commentModalOpener } from '../store/actions/commentActions';
import CommentModal from './CommentModal';

const Comments = () => {
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

                    dispatch(commentModalOpener(comment))

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
