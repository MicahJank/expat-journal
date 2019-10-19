import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";

class NewsFeed extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }
  render() {
    return (
      <div>
      
          <div className="newposts">New posts from all Expats </div>
          <div className="allstories">
            {this.props.stories.map(story => {
              return (
                <div id={story.id} className="singlestory">
                  <img src="https://www.azamara.com/sites/default/files/heros/1800x1000-zakynthos-greece.jpg" />
                </div>
              );
            })}
          </div>
       
      </div>
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
