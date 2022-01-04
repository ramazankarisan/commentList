const INITIAL_STATE = {
  postList: [],
  postListError: '',
  postDetail: { id: '', title: '', created_at: '', content: '', comments: [] },
  postDetailError: ''
};




export const postReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'BRING_POST_LIST':
      return { ...state, postList: action.payload };
    case 'BRING_POST_LIST_ERROR':
      return { ...state, postListError: action.payload };
    case 'BRING_POST':
      return { ...state, postDetail: action.payload };
    case 'BRING_POST_ERROR':
      return { ...state, postDetailError: action.payload };

    default:
      return state;
  }
} 