import axios from "axios"
import { api } from "../../api"

export const bringPostList = () => dispatch => {
  api().get(`/posts`)
    .then(response => dispatch({ type: 'BRING_POST_LIST', payload: response.data }))
    .catch(dispatch({ type: 'BRING_POST_LIST_ERROR', payload: 'an error accured' }))
}

export const bringPost = (parameter) => dispatch => {
  axios.all([
    api().get(`/posts/${parameter}`),
    api().get(`/posts/${parameter}/comments`)
  ])
    .then(responses => {
      const payload = {
        ...responses[0].data,
        comments: responses[1].data
      }
      dispatch({ type: 'BRING_POST', payload })

    })
    .catch(error => { dispatch({ type: 'BRING_POST_ERROR', payload: 'an error occured while the post is being loaded' }) })
}  