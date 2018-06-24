export const POSTS_FETCHING_START = "POSTS_FETCHING_START";
export const POSTS_FETCHING_SUCCESS = "POSTS_FETCHING_SUCCESS";

export const postStart = () => ({type: POSTS_FETCHING_START });
export const postSuccess = (posts) => ({type: POSTS_FETCHING_SUCCESS, posts });


export const postsFetch = () => async dispatch => {
  dispatch(postStart());
  const response = await fetch("https://warsawjs-21-api.herokuapp.com/posts/").then( res => res.json());

  console.log(response);

  dispatch(postSuccess(response.posts));
}