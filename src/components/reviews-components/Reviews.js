import React from 'react';

import commentApi from '../../apis/commentsApi';
import ReviewsForm from './ReviewsForm';

class Reviews extends React.Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    commentApi.get('/comments').then(response => {
      this.setState({
        reviews: response.data
      });
    });
  };

  onFormSubmit = (name, rating, comment) => {
    const newReview = {
      name: name,
      rating: rating,
      comment: comment
    };
    commentApi
      .post('/comments', {
        name,
        comment
      })
      .then(response => {
        this.getComments();
      });
  };

  renderListHelper() {
    return this.state.reviews.map(review => {
      return (
        <div className="item" key={review.name}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{review.name}</h2>

              <p>{review.comment}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <ReviewsForm onFormSubmit={this.onFormSubmit} />
        <div className="ui relaxed divided list">{this.renderListHelper()}</div>
      </React.Fragment>
    );
  }
}

export default Reviews;
