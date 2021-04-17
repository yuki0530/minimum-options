import {SEND_FEELING} from '../action'

const initialAppState = {
  feeling: '',
};

const feelingreducer = (state = initialAppState, action) => {
  if (action.type === SEND_FEELING) {
    return Object.assign({}, state, {
      feeling: action.feeling
    });
  } else {
    return state;
  }
};

export default feelingreducer;