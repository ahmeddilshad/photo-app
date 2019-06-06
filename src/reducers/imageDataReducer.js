import {
  GET_IMAGES_FETCHING,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL
} from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  success: false,
  fail: false,
  responseData: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_IMAGES_FETCHING:
      return {
        ...state,
        loading: true,
        success: false,
        fail: false,
        responseData: null
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        fail: false,
        responseData: action.payload
      };
    case GET_IMAGES_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        fail: true,
        responseData: null
      };
    default:
      return state;
  }
};
