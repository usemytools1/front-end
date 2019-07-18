import { LOGIN_START, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_TOOL } from "../actions";

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case FETCH_DATA_START: {
        console.log("Start" )
        return {
            ...state,
            error: "",
            fetchingTools: true
        };
    }
    case FETCH_DATA_SUCCESS: {
        return {
            ...state,
            error: "",
            fetchingTools: false,
            friends: action.payload
        };
    }
    case FETCH_DATA_FAILURE: {
        return {
            ...state,
            error: action.payload
        }
    }
    case ADD_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.payload],
        addingTool: true
      }
    default:
      return state;
  }
}

export default reducer;
