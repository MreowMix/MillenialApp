import React from "react";
import PropTypes from "prop-types";

export default class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likeCount: 0
    };
  }

  likePost() {
    const updatedCount = this.state.likeCount + 1;
    this.setState({
      likeCount: updatedCount
    });
  }

  render() {
    return (
      <div>
        <h4>
          {this.props.author} says {this.props.content} on {this.props.date}
        </h4>
        <div>
          <div>{this.state.likeCount} people like this story </div>
          <br />
          <button type="button" onClick={() => this.likePost()}>
            Like
          </button>
        </div>
      </div>
    );
  }
}

Story.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  timestamp: PropTypes.string
};
