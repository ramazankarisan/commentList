import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Header, Modal } from 'semantic-ui-react'
import { api } from '../api'
import PostContext from '../context/PostContext'

const CommentModal = () => {
  const navigate = useNavigate()
  const { parameter, setOpen, open, state, post, setPost } = useContext(PostContext);
  const [error, setError] = useState('')

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const onFormClick = () => {

    api()
      .put(`/posts/${parameter}/comments/${state.id}`, post)
      .then(response => {
        setError('')
        navigate(`/posts/${parameter}`)
        setOpen(false)
      }
      )
      .catch(error => setError('The Content is required!'));

  }

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}

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

                <input onChange={onInputChange} name="display_name" placeholder='title'
                  value={post.display_name}
                  type="text"
                  disabled
                />

              </div>
              <div className="field">
                <textarea onChange={onInputChange} name="body"
                  value={post.body}
                  placeholder="content" rows="3"></textarea>
              </div>


            </form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={() => {
            onFormClick();
          }}>
            Send
          </Button>
          <Button
            color="red"
            content="cancel"
            labelPosition='right'
            icon='cancel'
            onClick={() => setOpen(false)}

          />
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default CommentModal
