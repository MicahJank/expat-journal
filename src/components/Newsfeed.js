import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import { Link } from "react-router-dom";

class NewsFeed extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }
  render() {
    return (
      <div className='main'>
        <div className="newposts">New posts from all Expats </div>
        <div className="allstories">
          {this.props.stories.map(story => {
            return (
              <>
                <div id={story.id} className="singlestory">
                  <Link to={`/stories/${story.id}`}>
                    {" "}
                    <img src={story.sImageUrl} />
                    <h1>{story.sName}</h1>
                  </Link>
                </div>
              </>
            );
          })}
          <div className='newsfeed-spacer'></div>
          <div className='newsfeed-spacer'></div>
          <div className='newsfeed-spacer'></div>
          <div className='newsfeed-spacer'></div>
          
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
