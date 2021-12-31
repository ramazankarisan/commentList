import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'semantic-ui-react'
import { api } from '../api'
import PostContext from '../context/PostContext'

const DeletePostModal = () => {
  const [open, setOpen] = useState(false)
  const show = () => setOpen(true)
  const close = () => setOpen(false)
  const { parameter } = useContext(PostContext)
  const navigate = useNavigate();
  const [error, setError] = useState('')

  const handleDelete = () => {
    api()
      .delete(`posts/${parameter}`)
      .then(() => {
        setError('')
        close();
        navigate(`/`)
      })
      .catch(() => {
        setError('while deleting the post, a failure appeared')
      })
  }

  return (
    <>
      <Button onClick={show} color="red">Sil</Button>
      <Modal
        size="mini"
        open={open}
        onClose={close}
      >
        <Modal.Header>Delete the Post</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this post?</p>
          {error && <p>{error}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            No
          </Button>
          <Button positive
            icon="delete"
            labelPosition='right'
            onClick={handleDelete}>
            Yes, delete it!
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default DeletePostModal
