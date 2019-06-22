import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import './App.css';

class App extends Component {

  state = {
    newSmurf: {
      name: '',
      age: '',
      height: '',
      id: ''
    }
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
            </div>
          );
        })}
        <form onSubmit={this.addSmurf} className="add-smurf-form">
          <h2>Here You can Add any Smurfs You May Know About:</h2>
          <input type="text" name="name" value={this.state.newSmurf.name} onChange={this.changeHandler} placeholder="name" />
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
  { getSmurfs }
)(App);
