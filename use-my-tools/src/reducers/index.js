import {
  LOGIN_START,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_TOOL,
  UPDATE_TOOL,
  DELETE_TOOL
} from "../actions";

const initialState = {
  userOwnsTools: [
    {
      id: 0,
      owner: "",
      availability: false,
      name: "hammer",
      img: "fake.img",
      desc: "you hit things with this"
    }
  ],
  userBorrowingTools: [
    {
      id: 5,
      owner: "",
      availability: false,
      name: "blowtorch",
      img: "fake.img",
      desc: "you melt things with this"
    }
  ],

  fetchingTools: false,
  tools: [
    {
      id: 0,
      owner: "",
      availability: false,
      name: "hammer",
      img: "fake.img",
      desc: "you hit things with this"
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
    default:
      return state;
  }
}

export default reducer;
