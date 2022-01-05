import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Header, Modal } from 'semantic-ui-react'
import { bodyOnChange, commentFormInitial, commentModalClose, commentModalOnClick } from '../store/actions/commentActions'

const CommentModal = () => {
  const param = useParams();
  const navigate = useNavigate()

  const modalHandle = useSelector(state => state.comment);
  const editComment = { ...modalHandle.comment, body: modalHandle.body }
  const error = useSelector(state => state.comment.commentEditError)

  const dispatch = useDispatch();

  return (
    <>
      <Modal
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
            dispatch(commentModalOnClick(param.id, modalHandle.comment.id, editComment))

            if (!(error.length > 0)) {
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
