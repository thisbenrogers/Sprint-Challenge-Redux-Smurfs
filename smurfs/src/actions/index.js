import axios from 'axios';


export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.response });
    });
}

export const ADDING_SMURF_START = 'ADDING_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response });
    });
};

export const EDITING_SMURF_START = 'EDITING_SMURF';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE';
export const editSmurf = smurf => dispatch => {
  dispatch({ type: EDITING_SMURF_START });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_SMURF_FAILURE, payload: err.response });
    });
};

export const DELETING_SMURF_START = 'DELETING_SMURF';
export const DELETING_SMURF_SUCCESS = 'DELETING_SMURF_SUCCESS';
export const DELETING_SMURF_FAILURE = 'DELETING_SMURF_FAILURE';
export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETING_SMURF_FAILURE, payload: err.response });
    });
};