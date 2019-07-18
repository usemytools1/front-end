import { LOGIN_START, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_TOOL } from "../actions";


const initialState = {
  userOwnsTools: [],
  userBorrowingTools: [],
  fetchingTools: false,
  tools: [{
    owner: "",
    availability: false,
    name: "hammer", 
    img: "fake.img",
    desc: "you hit things with this"
  }],
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
        console.log("Start" )
        return {
            ...state,
            error: "",
            fetchingTools: true
        };
    }
    case FETCH_DATA_SUCCESS: {
      console.log("Got It" )
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
