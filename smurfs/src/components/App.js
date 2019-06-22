import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf, editSmurf } from '../actions';

import './App.css';

class App extends Component {

  state = {
    newSmurf: {
      name: '',
      age: '',
      height: '',
      id: ''
    },
    editingSmurf: false
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      }
    });
  };

  editSmurf = (e, smurf) => {
    e.preventDefault();
    this.setState({
      newSmurf: {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: smurf.id
      },
      editingSmurf: true
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Here is a list of Known Smurfs:</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id} className="smurf">
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
              <button onClick={e => this.editSmurf(e, smurf)}>Edit In Form Below</button>
            </div>
          );
        })}
        <form onSubmit={this.addSmurf} className="add-smurf-form">
          <h2>Here You can Add any Smurfs You May Know About:</h2>
          <input type="text" name="name" value={this.state.newSmurf.name} onChange={this.changeHandler} placeholder="name" />
          <input type="number" name="age" value={this.state.newSmurf.age} onChange={this.changeHandler} placeholder="age" />
          <input type="text" name="height" value={this.state.newSmurf.height} onChange={this.changeHandler} placeholder="height" />
          {!this.state.editingSmurf ? (
            <button onClick={this.addSmurf}>Add Known Smurf</button>
          ) : (
              <button
                onClick={e => {
                  this.props.editSmurf(this.state.newSmurf);
                  this.setState({
                    newSmurf: {
                      name: '',
                      age: '',
                      height: '',
                      id: ''
                    },
                    editingSmurf: false
                  });
                }}
              >
                Edit This Smurf
            </button>
            )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, editSmurf }
)(App);
