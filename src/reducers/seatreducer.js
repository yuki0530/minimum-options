import {SEND_SEAT} from '../action'

const initialAppState = {
  seat: '',
};

const seatreducer = (state = initialAppState, action) => {
  if (action.type === SEND_SEAT) {
    return Object.assign({}, state, {
      seat: action.seat
    });
  } else {
    return state;
  }
};

export default seatreducer;