import axios from "axios";

export const FETCH_STORY_START = "FETCH_STORY_START";
export const FETCH_STORY_SUCCESS = "FETCH_STORY_SUCCESS";
export const FETCH_STORY_ERROR = "FETCH_STORY_ERROR";
export const ADD_STORY = "ADD_STORY";
export const ADD_STORY_SUCCESS = "ADD_STORY_SUCCESS";
export const ADD_STORY_FAIL = "ADD_STORY_FAIL";
export const EDIT_STORY = "EDIT_STORY";
export const DELETE_STORY= "DELETE_STORY";

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

export const editStory = edit => dispatch => {
  axios
    .put("https://jsonplaceholder.typicode.com/todos/id", edit)
    .then( res => {
        dispatch({ type: EDIT_STORY, payload: res});
    })
    .catch(err => (console.log(err))
    )};


// DELETE EXISTING STORY

export const deleteStory = del => dispatch => {
  axios 
    .delete("https://jsonplaceholder.typicode.com/todos/id", del) 
    .then(res => {
      dispatch({type: DELETE_STORY, payload: res});
    })
    .catch(err => (console.log(err))
    )};