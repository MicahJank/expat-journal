import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchStories } from "../actions";

class NewsFeed extends Component {
  componentDidMount() {
    this.props.fetchStories()
  }
  render() {
    return (
      <>
      <div className="newsfeed">
      <span className="newposts">New posts from all Expats </span>
        {this.props.stories.map(story => {
          return (
            <div>
       
                <div id={story.id}>
                  <h1>{story.sName}</h1>
                  <p>{story.sContent}</p>
                </div>
      
            </div>
          );
        })}
             </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchStories }
)(NewsFeed);
