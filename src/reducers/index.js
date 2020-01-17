import { combineReducers } from 'redux';

const reviewsReducer = () => {
  return [{ name: 'hi', rating: 5, comment: 'hi' }];
};

const selectedHeaderReducer = (selectedHeader = null, action) => {
  if (action.type === 'HEADER_SELECTED') {
    return action.payload;
  } else {
    return null;
  }
};

export default combineReducers({
  selectedHeader: selectedHeaderReducer,
  reviews: reviewsReducer
});
