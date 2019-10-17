import axios from "axios";

export const FETCH_STORY_START = "FETCH_STORY_START";
export const FETCH_STORY_SUCCESS = "FETCH_STORY_SUCCESS";
export const FETCH_STORY_ERROR = "FETCH_STORY_ERROR";
export const ADD_STORY = "ADD_STORY";
export const ADD_STORY_SUCCESS = "ADD_STORY_SUCCESS";
export const ADD_STORY_FAIL = "ADD_STORY_FAIL";

// FETCH STORIES FROM API

export const fetchStory = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_STORY_START });
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => {
        console.log(res);
        dispatch({ FETCH_STORY_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: FETCH_STORY_ERROR });
      });
  };
};

// ADD STORY TO API

export const addStory = add => dispatch => {
  dispatch({ type: ADD_STORY });

  axios
    .post("https://jsonplaceholder.typicode.com/todos/1", add)
    .then(res => {
      dispatch({ type: ADD_STORY_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: ADD_STORY_FAIL, payload: err });
    });
};

// EDIT EXISTING STORY
// DELETE EXISTING STORY
