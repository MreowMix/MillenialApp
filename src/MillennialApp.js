import React from "react";
import PropTypes from "prop-types";
import Newsfeed from "./Newsfeed";
import StoryForm from "./StoryForm";

export default class MillennialApp extends React.Component {
  constructor(props) {
    super(props);

    const stories = [
      {
        author: "Monica",
        content: "Kylie Jenner tweets and Snapchat loses $1.3B",
        date: "Feb 22nd"
      },
      {
        author: "Cristina",
        content: "Jennifer Aniston divorced",
        date: "Feb 15th"
      },
      {
        author: "Cristina",
        content: "Ed Sheeran is engaged!!",
        date: "Feb 8th"
      },
      {
        author: "Monica",
        content: "Stormi Webster gets most insta likes EVER",
        date: "Feb 1st"
      }
    ];

    this.state = {
      stories: stories
    };

    this.addStory = this.addStory.bind(this);
  }

  addStory(author, content, date) {
    const updateStories = this.state.stories;
    updateStories.unshift({
      author: author,
      content: content,
      date: date
    });

    this.setState({
      stories: updateStories
    });
  }

  render() {
    return (
      <div>
        <Newsfeed stories={this.state.stories} />
        <br />
        <br />
        <StoryForm addStory={this.addStory} />
      </div>
    );
  }
}
