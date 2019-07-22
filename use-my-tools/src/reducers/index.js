import {
  LOGIN_START,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_TOOL,
  UPDATE_TOOL,
  DELETE_TOOL,
  BORROW_TOOL
} from "../actions";

const initialState = {
  fetchingTools: false,
  tools: [
    {
      id: 1,
      user_id: 1,
      borrower_id: 1,
      name: "nail gun",
      img: "fake.img",
      desc: "nails faster"
    }
  ],
  loggingIn: false,
  error: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {

      return {
        ...state,
        loggingIn: true
      };
    }
    case FETCH_DATA_START: {
      console.log("Start");
      return {
        ...state,
        error: "",
        fetchingTools: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      console.log("Fetched");
      return {
        ...state,
        error: "",
        fetchingTools: false,
        tools: action.payload
      };
    }
    case FETCH_DATA_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ADD_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.payload],
        addingTool: true
      };
    case UPDATE_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.payload],
      };
    case DELETE_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.payload],
      };
      case BORROW_TOOL:
        return {
          ...state,
          tools: [...state.tools, action.payload],
        };
    default:
      return state;
  }
}

export default reducer;
