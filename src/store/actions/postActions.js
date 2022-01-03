import { api } from "../../api"

export const bringPostList = () => dispatch => {
  api().get(`/posts`)
    .then(response => dispatch({ type: 'BRING_POST_LIST', payload: response.data }))
    .catch(dispatch({ type: 'BRING_POST_LIST_ERROR', payload: 'an error accured' }))
}