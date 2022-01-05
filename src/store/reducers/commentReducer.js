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
    case 'COMMENT_FORM_INITIAL':
      return {
        display_name: '',
        body: ''
      };

    default:
      return state;
  }
} 