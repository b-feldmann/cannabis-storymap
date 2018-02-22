import { REQUEST_MJ_DATA } from '../actions/actionTypes'

const INITIAL_STATE = { mj: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_MJ_DATA:
      return { ...state, mj: action.payload };
    default:
      return state;
  }
}