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
export const handleCommentSubmit = (e, id, post) => dispatch => {
  e.preventDefault();
  api().post(`/posts/${id}/comments`, post)
    .then(response => {

      console.log(response.data);
      dispatch({ type: 'HANDLE_COMMENT_SUBMIT', payload: [...post, response.data] })
      // setComments([...comments, response.data])
    }
    )
    .catch(error => console.log(error))

} 
