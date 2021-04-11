import {SEND_STATION} from '../action'

const initialAppState = {
  station: '',
};

const stationreducer = (state = initialAppState, action) => {
  if (action.type === SEND_STATION) {
    return Object.assign({}, state, {
      station: action.station
    });
  } else {
    return state;
  }
};

export default stationreducer;