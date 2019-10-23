import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import { Route, Link } from 'react-router-dom';

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
                  <>
                <div id={story.id} className="singlestory">
                <Link to={`/users/${this.props.match.params.id}`}> <img src={story.sImageUrl} />
                  <h1>{story.sName}</h1></Link> 
                </div>
                    <Route path="/users/:id" />
                    </>
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
