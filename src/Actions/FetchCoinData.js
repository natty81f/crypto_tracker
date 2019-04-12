import axios from "axios";
import { apiBaseURL } from "./..utils/Constants";
import {
  FETCH_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "./Utils/ActionTypes";

export default function FetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCH_COIN_DATA });

    return axios
      .get(`${apiBaseURL}/v1/ticker/?limit=10`)
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, playload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, playload: err.data });
      });
  };
}
