import React from 'react';

import ReviewsForm from './ReviewsForm';

class Reviews extends React.Component {
  state = {
    reviews: [],
  };
  
  onFormSubmit = (name, rating, comment) => {
    const newReview = {
      name: name,
      rating: rating,
      comment: comment
    };
    this.setState({
      reviews: [...this.state.reviews, newReview]
    });
  }

  renderListHelper() {
    return this.state.reviews.map(review => {
      return (
        <div className="item" key={review.name}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{review.name}</h2>
              <p>{review.rating}</p>
              <p>{review.comment}</p>
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <React.Fragment>
        <ReviewsForm onFormSubmit={this.onFormSubmit} />
        <div className="ui relaxed divided list">
          {this.renderListHelper()}
        </div>
      </React.Fragment>  
    );
  }
}

export default Reviews;