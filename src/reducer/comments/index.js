import { COMMENTS_FETCHING_START, COMMENTS_FETCHING_SUCCESS } from "../../actions/comments/index";

const initialState = {
  comments: {},
  fetching: false,
};

const commentsReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case COMMENTS_FETCHING_START : {
      newState.fetching = true;
      return newState;
    }
    case COMMENTS_FETCHING_SUCCESS : {
      newState.comments[action.id] = action.comments;
      newState.fetching = false;
      return newState;
    }
  }

  return state;
}

export default commentsReducer;