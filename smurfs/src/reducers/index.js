import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  EDITING_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  DELETING_SMURF_START,
  DELETING_SMURF_SUCCESS,
  DELETING_SMURF_FAILURE,
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
    case FETCHING_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: '',
        smurfs: action.payload
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADDING_SMURF_START:
      return {
        ...state,
        error: '',
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        addingSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case EDITING_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
        error: ''
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        error: '',
        updatingSmurf: false,
        smurfs: action.payload
      };
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      };
    case DELETING_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: ''
      };
    case DELETING_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        error: '',
        smurfs: action.payload
      };
    case DELETING_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}