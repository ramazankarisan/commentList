import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Header, Modal } from 'semantic-ui-react'
import { api } from '../api'
import PostContext from '../context/PostContext'
import { bodyOnChange, commentFormInitial, commentModalClose, commentModalOnClick, commentModalOpener, displayNameOnChange } from '../store/actions/commentActions'

const CommentModal = () => {
  const param = useParams();
  const navigate = useNavigate()
  // const { parameter, setOpen, state, post, setPost } = useContext(PostContext);
  // const [error, setError] = useState('')

  const modalHandle = useSelector(state => state.comment);
  const editComment = { ...modalHandle.comment, body: modalHandle.body }
  const error = useSelector(state => state.comment.commentEditError)
  // const commentOnClicked = useSelector(state => state.post.postDetail.comments[modalHandle.index])
  // console.log(commentOnClicked);
  const dispatch = useDispatch();
  // console.log(commentOnClicked);

  // const [comment, setComment] = useState(modalHandle.comment)

  // const onInputChange = (e) => {
  //   // setComment({ ...comment, [e.target.name]: e.target.value })
  // }

  // const onFormClick = () => {

  //   // api()
  //   //   .put(`/posts/${parameter}/comments/${state.id}`, post)
  //   //   .then(response => {
  //   //     setError('')
  //   //     navigate(`/posts/${parameter}`)
  //   //     setOpen(false)
  //   //   }
  //   //   )
  //   //   .catch(error => setError('The Content is required!'));

  // }

  return (
    <>
      <Modal
        // onClose={() => setOpen(false)}
        // onOpen={() => setOpen(true)}
        open={modalHandle.open}

      >

        <Modal.Content image>

          <Modal.Description>
            <Header>Edit the Comment</Header>
            {error.length > 0 && <div class="ui error message">
              <div class="header">Error</div>
              <p>{error}</p>
            </div>}

            <form className="ui form">
              <div className="field">
                <label>Comment</label>

                <input name="display_name" placeholder='title'
                  value={modalHandle.display_name}
                  type="text"
                  disabled
                />

              </div>
              <div className="field">
                <textarea onChange={(e) => dispatch(bodyOnChange(e))} name="body"
                  value={modalHandle.body}
                  placeholder="content" rows="3"></textarea>
              </div>


            </form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={() => {
            // onFormClick();
            dispatch(commentModalOnClick(param.id, modalHandle.comment.id, editComment))

            if (!(error.length > 0)) {
              console.log('error empty')
              dispatch(commentModalClose())
              dispatch(commentFormInitial());
              navigate(`/posts/${param.id}`)
            }

          }}>
            Send
          </Button>
          <Button
            color="red"
            content="cancel"
            labelPosition='right'
            icon='cancel'
            onClick={() => dispatch(commentModalClose())}

          />
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default CommentModal
