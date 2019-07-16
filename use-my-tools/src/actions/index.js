import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const loginAction = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios   
     .post("http://localhost:5000/api/login", creds)
     .then(res => localStorage.setItem("token", res.data.payload));
};

// export const getTools = () => dispatch => {
//     dispatch({ type: FETCH_DATA_START });
//     axios
//       .get("http://localhost:5000/api/tools", {
//         headers: { Authorization: localStorage.getItem("token") }
//       })
//       .then(res => {
//         console.log(res.data);
//         dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
//       })
//       .catch(err => {
//         console.log(err.response);
//         if (err.response.status === 403) {
//           localStorage.removeItem("token");
//         }
//         dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
//       });
//   };
  