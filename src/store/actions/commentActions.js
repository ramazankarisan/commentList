import { api } from "../../api";

export const displayNameOnChange = (e) => {
  return {
    type: 'DISPLAY_NAME_ONCHANGE',
    payload: e.target.value
  }
};
export const bodyOnChange = (e) => {
  return {
    type: 'BODY_ONCHANGE',
    payload: e.target.value
  }
};
export const commentFormInitial = () => {
  return {
    type: 'COMMENT_FORM_INITIAL',

  }
}
export const commentModalOpener = (comment) => {
  return {
    type: 'COMMENT_MODAL_OPEN',
    id: comment.id,

    comment: comment
  }
};

export const commentModalClicked = () => dispatch => {

};

export const commentModalClose = () => {
  return {
    type: 'COMMENT_MODAL_CLOSE',

  }
};
export const commentModalOnClick = (id, commentId, comment) => dispatch => {
  api()
    .put(`/posts/${id}/comments/${commentId}`, comment)
    .then(response => {
      // setError('')
      // navigate(`/posts/${id}`)
      dispatch({ type: 'COMMENT_MODAL_CLICK' })
    }
    )
    .catch(error => console.log('The Content is required!'));


}
