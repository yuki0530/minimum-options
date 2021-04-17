import {SEND_PAYMENT} from '../action'

const initialAppState = {
  payment: '',
};

const paymentreducer = (state = initialAppState, action) => {
  if (action.type === SEND_PAYMENT) {
    return Object.assign({}, state, {
      payment: action.payment
    });
  } else {
    return state;
  }
};

export default paymentreducer;