import { LOGIN_START, LOGIN_SUCCESS } from "../../actions/user";

const initialState = {
  username: "",
  fetching: ""
}

const userReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case LOGIN_START : {
      newState.fetching = true;

      return newState;
    }
    case LOGIN_SUCCESS : {
      newState.username = action.login;
      newState.fetching = false;
      return newState;
    }
  }
  return state;

  
};

export default userReducer;