export const COMMENTS_FETCHING_START = "COMMENTS_FETCHING_START";
export const COMMENTS_FETCHING_SUCCESS = "COMMENTS_FETCHING_SUCCESS";

export const commentsStart = () => ({ type: COMMENTS_FETCHING_START });
export const commentsSuccess = (comments, id) => ({
  type: COMMENTS_FETCHING_SUCCESS, 
  comments, 
  id 
});


export const commentsFetch = id => async dispatch => {
  dispatch(commentsStart());
  const response = await fetch(`https://warsawjs-21-api.herokuapp.com/posts/${id}/comments`).then( res => res.json());


  dispatch(commentsSuccess(response.comments, id));
}