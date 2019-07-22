import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const SIGN_UP_START = "SIGN_UP_START";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const ADD_TOOL = "ADD_TOOL";
export const DELETE_TOOL = "DELETE_TOOL";
export const UPDATE_TOOL = "UPDATE_TOOL";
export const BORROW_TOOL = "BORROW_TOOL";

export const LOGOUT = "LOGOUT"

export const loginAction = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://use-my-tools-1.herokuapp.com/api/auth/login", creds)
    .then(res =>{
      const {authToken, username} = res.data
      localStorage.setItem("token", authToken)
      return username
    })
    .then(username => localStorage.setItem("username", username))
};

export const signUpAction = creds => dispatch => {
  dispatch({ type: SIGN_UP_START });
  return axios
    .post("https://use-my-tools-1.herokuapp.com/api/auth/register", creds)
    .then(res =>{
      const {authToken, username} = res.data
      localStorage.setItem("token", authToken)
      return username
    })
    .then(username => localStorage.setItem("username", username))
};

export const getTools = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://use-my-tools-1.herokuapp.com/api/tools", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const addTool = tool => dispatch => {
  dispatch({
    type: ADD_TOOL
  });
  axios
    .post("https://use-my-tools-1.herokuapp.com/api/tools", tool)
    .then(res =>
      dispatch({
        type: ADD_TOOL,
        payload: tool
      })
    )
    .then(res => console.log("worked: ", res, tool))
    .catch(err => console.log("fail: ", err));
};

export const deleteTool = tool => dispatch => {
  dispatch({
    type: DELETE_TOOL
  });
  axios
    .delete("https://use-my-tools-1.herokuapp.com/api/tools/:id", tool)
    .then(res =>
      dispatch({
        type: DELETE_TOOL,
        payload: tool
      })
    )
    .then(res => console.log("worked: ", res, tool))
    .catch(err => console.log("fail: ", err));
};

export const updateTool = tool => dispatch => {
  dispatch({
    type: UPDATE_TOOL
  });
  axios
    .put("https://use-my-tools-1.herokuapp.com/api/tools/:id", tool)
    .then(res =>
      dispatch({
        type: UPDATE_TOOL,
        payload: tool
      })
    )
    .then(res => console.log("worked: ", res, tool))
    .catch(err => console.log("fail: ", err));
};

export const borrowTool = tool => dispatch => {
  dispatch({
    type: BORROW_TOOL
  });
  axios
    .put("https://use-my-tools-1.herokuapp.com/api/tools/:id", tool)
    .then(res =>
      dispatch({
        type: BORROW_TOOL,
        payload: tool
      })
    )
    .then(res => console.log("worked: ", res, tool))
    .catch(err => console.log("fail: ", err));
};

export const logoutAction = history => dispatch => {
  dispatch({ type: LOGOUT });
  history.push('/');
}