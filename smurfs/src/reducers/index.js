/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}