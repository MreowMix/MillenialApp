import React from "react";
import PropTypes from "prop-types";
import Story from "./Story";

export default class Newsfeed extends React.Component {
  getStories() {
    const stories = this.props.stories.map((story, idx) => {
      return (
        <Story
          author={story.author}
          content={story.content}
          date={story.date}
          key={`story-${idx}`}
        />
      );
    });

    return stories;
  }

  render() {
    return (
      <div>
        <div>
          <h2>Newsfeed</h2>
          {this.getStories()}
        </div>
      </div>
    );
  }
}

Newsfeed.propTypes = {
  stories: PropTypes.array
};
