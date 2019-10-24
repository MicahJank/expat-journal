import axios from "axios";

export const FETCH_STORY_START = "FETCH_STORY_START";
export const FETCH_STORY_SUCCESS = "FETCH_STORY_SUCCESS";
export const FETCH_STORY_ERROR = "FETCH_STORY_ERROR";
export const ADD_STORY = "ADD_STORY";
export const ADD_STORY_SUCCESS = "ADD_STORY_SUCCESS";
export const ADD_STORY_FAIL = "ADD_STORY_FAIL";
export const EDIT_STORY = "EDIT_STORY";
export const DELETE_STORY_START = "DELETE_STORY_START";
export const DELETE_STORY_SUCCESS = "DELETE_STORY_SUCCESS";
export const DELETE_STORY_ERROR = "DELETE_STORY_ERROR";

// FETCH STORIES FROM API

export const fetchStories = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_STORY_START });
    axios
      .get("https://pt11expat.herokuapp.com/api/stories/")
      .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_STORY_SUCCESS, payload: res.data });
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
    .post("https://pt11expat.herokuapp.com/api/stories/new/", add)
    .then(res => {
      dispatch({ type: ADD_STORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_STORY_FAIL, payload: err });
    });
};

// EDIT EXISTING STORY

export const editStory = storyInfo => dispatch => {
  dispatch({ type: FETCH_STORY_START });
  axios
    .put(`https://pt11expat.herokuapp.com/api/stories/update/${storyInfo.id}`, storyInfo)
    .then(res => {
      dispatch({ type: FETCH_STORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_STORY_ERROR, payload: err })
    });
};

// DELETE EXISTING STORY

export const deleteStory = id => dispatch => {
  console.log('deleteStory')
  dispatch({ type: DELETE_STORY_START });
  axios
    .delete(`https://pt11expat.herokuapp.com/api/stories/delete/${id}`)
    .then(res => {

      dispatch({ type: FETCH_STORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_STORY_ERROR, payload: err })
    });
}; 
