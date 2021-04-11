import {SEND_GENRE} from '../action'

const initialAppState = {
  genre: '',
};

const genrereducer = (state = initialAppState, action) => {
  if (action.type === SEND_GENRE) {
    return Object.assign({}, state, {
      genre: action.genre
    });
  } else {
    return state;
  }
};

export default genrereducer;