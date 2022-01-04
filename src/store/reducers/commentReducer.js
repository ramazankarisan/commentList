const INITIAL_STATE = {
  display_name: '',
  body: ''
};




export const commentReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'DISPLAY_NAME_ONCHANGE':
      return { ...state, display_name: action.payload };
    case 'BODY_ONCHANGE':
      return { ...state, body: action.payload };
    case 'HANDLE_COMMENT_SUBMIT':
      console.log(action.payload);
      return { ...state, a: action.payload }

    default:
      return state;
  }
} 