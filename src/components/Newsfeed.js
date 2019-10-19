import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import placeholderimg from "../imgs/static.jpg";

class NewsFeed extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }
  render() {
    return (
      <>
        <div className="newsfeed">
          <span className="newposts">New posts from all Expats </span>
          <div className="allstories">
            {this.props.stories.map(story => {
              return (
                <div id={story.id} className="singlestory">
                  <img src={placeholderimg} />
                </div>
              );
            })}
          </div>
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
