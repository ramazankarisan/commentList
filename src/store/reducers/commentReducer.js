const INITIAL_STATE = {
  display_name: '',
  body: '',
  open: false,
  comment: '',
  commentEditError: ''

};

export const commentReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'DISPLAY_NAME_ONCHANGE':
      return { ...state, display_name: action.payload };
    case 'BODY_ONCHANGE':
      return { ...state, body: action.payload };
    case 'COMMENT_FORM_INITIAL':
      return {
        display_name: '',
        body: '',
        open: false,
        comment: '',
        commentEditError: ''

      };
    case 'COMMENT_MODAL_OPEN':
      return { ...state, body: action.comment.body, display_name: action.comment.display_name, open: true, comment: action.comment };
    case 'COMMENT_MODAL_CLOSE':
      return { ...state, open: false };
    case 'COMMENT_MODAL_CLICK':
      const comment = state.comment;
      const body = state.body
      return { ...state, comment: { ...comment, body }, commentEditError: '', open: false }
    case 'COMMENT_MODAL_CLICK_ERROR':
      return { ...state, commentEditError: action.payload, open: true }

    default:
      return state;
  }
} 