import { combineReducers } from 'redux';
import station from './stationreducer';
import genre from './genrereducer';
import feeling from './feelingreducer';
import seat from './seatreducer';
import payment from './paymentreducer';

// RootReducers作成
const reducer = combineReducers({
  station,
  genre,
  feeling,
  seat,
  payment
});

export default reducer;