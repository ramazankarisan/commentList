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
