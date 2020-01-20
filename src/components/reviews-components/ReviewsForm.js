import React from 'react';

class ReviewsForm extends React.Component {
  state = {
    name: '',
    rating: 0,
    comment: ''
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onRatingChange = event => {
    this.setState({ rating: event.target.value });
  };

  onCommentChange = event => {
    this.setState({ comment: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(
      this.state.name,
      this.state.rating,
      this.state.comment
    );
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <label>Rating</label>
            <input
              type="number"
              value={this.state.rating}
              onChange={this.onRatingChange}
            />
            <label>Comments</label>
            <input
              type="text"
              value={this.state.comment}
              onChange={this.onCommentChange}
            />
            <button type="button" onClick={this.onFormSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewsForm;
