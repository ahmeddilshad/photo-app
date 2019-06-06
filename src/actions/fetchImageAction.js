import {
  GET_IMAGES_FETCHING,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL
} from "./actionTypes";
import { requestToAPI } from "../helpers/functions";

const getImages = params => async dispatch => {
  try {
    dispatch({ type: GET_IMAGES_FETCHING });
    const { searchString, page, prevData } = params;
    let queryEndPoint = "photos/random?";
    queryEndPoint += `page=${page}&count=9`;
    if (searchString) {
      queryEndPoint += `&query=${searchString}`;
    }
    let response = await requestToAPI({ queryEndPoint });
    if (response.errors) {
      throw new Error("Some error occured");
    } else {
      if (page > 1 && prevData.length > 0) {
        response = [...prevData, ...response];
      }
      dispatch({ type: GET_IMAGES_SUCCESS, payload: response });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_IMAGES_FAIL });
  }
};

export default getImages;
