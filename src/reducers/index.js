import { combineReducers } from 'redux';
import station from './stationreducer';
import genre from './genrereducer';

const reducer = combineReducers({
  station,
  genre,
});

export default reducer;