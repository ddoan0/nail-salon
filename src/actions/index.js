import { MAIN_SELECTED, MENU_SELECTED, REVIEWS_SELECTED } from './types';

export const selectHeader = headerSelection => {
  return {
    type: 'HEADER_SELECTED',
    payload: headerSelection
  };
};
