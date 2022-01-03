const INITIAL_STATE = {
  postList: [],
  postListError: ''
};




export const postReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'BRING_POST_LIST':
      return { ...state, postList: action.payload };
    case 'BRING_POST_LIST_ERROR':
      return { ...state, postListError: action.payload };

    default:
      return state;
  }
} 