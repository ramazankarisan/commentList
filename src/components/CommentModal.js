import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Header, Modal } from 'semantic-ui-react'
import { api } from '../api'
import PostContext from '../context/PostContext'



const CommentModal = ({ modalHelper }) => {
  const navigate = useNavigate()
  const { parameter, comments, setOpen, open } = useContext(PostContext);

  const [error, setError] = useState('')
  const [post, setPost] = useState(
    // 'try an see'
    { display_name: comments[modalHelper.index].display_name || "", body: comments[modalHelper.index].body || "" }
  )


  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError('')
    api()
      .put(`/posts/${parameter}/comments/${modalHelper.id}`, post)
      .then(response => navigate(`/posts/${parameter}`)
      )
      .catch(error => setError('Title and Content are required!'));


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
            <form onSubmit={onFormSubmit} className="ui form">
              <div className="field">
                <label>Comment</label>

                <input onChange={onInputChange} name="display_name" placeholder='title' value={post.display_name} type="text" />

              </div>
              <div className="field">
                <textarea onChange={onInputChange} name="body" value={post.body} placeholder="content" rows="3"></textarea>
              </div>

            </form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button role="submit" color='blue' onClick={() => setOpen(false)}>
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
