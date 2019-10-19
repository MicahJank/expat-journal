import React from "react";
import { fetchStories } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import staticImage from "../imgs/static_travel_img.jpg";

class NewsFeed extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }
  render() {
    return (
      <>
        {this.props.stories.map(x => {
          return (
            <div>
              <Link to={`/stories/${x.id}`}>
                <div id={x.id}>
                  <img src={staticImage} alt="" />
                </div>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories,
    isFetching: state.isFetching,
    error: state.err
  };
};

export default connect(
  mapStateToProps,
  { fetchStories }
)(NewsFeed);
