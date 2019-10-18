import {
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_ERROR,
  ADD_STORY,
  ADD_STORY_SUCCESS,
  ADD_STORY_FAIL
} from "../actions";

const initialState = {
  stories: [],
  error: "",
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORY_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_STORY_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case FETCH_STORY_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false
      };
    case ADD_STORY:
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case ADD_STORY_SUCCESS:
      return {
        ...state,
        stories: action.payload,
        isFetching: false,
        error: false
      };
    case ADD_STORY_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
