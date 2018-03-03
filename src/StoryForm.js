import React from "react";
import PropTypes from "prop-types";

export default class StoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      content: "",
      date: ""
    };
  }

  update(type, value) {
    this.setState({
      [type]: value
    });
  }

  render() {
    return (
      <div>
        Content:
        <input
          type="text"
          value={this.state.content}
          onBlur={event => this.update("content", event.target.value)}
        />
        <br />
        Author:
        <input
          type="text"
          value={this.state.author}
          onBlur={event => this.update("author", event.target.value)}
        />
        <br />
        Date:
        <input
          type="text"
          value={this.state.date}
          onBlur={event => this.update("date", event.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={() =>
            this.props.addStory(
              this.state.author,
              this.state.content,
              this.state.date
            )
          }
        >
          Add New Story
        </button>
      </div>
    );
  }
}

StoryForm.propTypes = {
  addStory: PropTypes.func
};
