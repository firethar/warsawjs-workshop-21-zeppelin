export const POSTS_FETCHING_START = "POSTS_FETCHING_START";
export const POSTS_FETCHING_SUCCESS = "POSTS_FETCHING_SUCCESS";
export const POSTS_CREATE_SUCCESS = "POSTS_CREATE_SUCCESS";

export const postStart = () => ({type: POSTS_FETCHING_START });
export const postSuccess = (posts) => ({type: POSTS_FETCHING_SUCCESS, posts });

export const postCreateSuccess = (posts) => ({type: POSTS_CREATE_SUCCESS, posts });


export const postsFetch = () => async dispatch => {
  dispatch(postStart());

  const response = await fetch("https://warsawjs-21-api.herokuapp.com/posts/").then( res => res.json());

  dispatch(postSuccess(response.posts));
}

export const postsCreate = formData => async (dispatch, getState) => {
  const state = getState();

  formData.append("username", state.user.username);

  const response = await fetch("https://warsawjs-21-api.herokuapp.com/posts/", {
    method: "POST",
    body: formData,
  }).then( res => res.json());

  if(response.ok) {
    dispatch(postCreateSuccess(response.posts));
  }
}