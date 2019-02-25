import React, { Component } from 'react';
import {connect} from 'react-redux';
import Vatre from './Vatre'
import {fetch_player_cell, fetch_player_name} from './actions/index'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      players:[]
    }
  }

 localFetchPlayer = async () => {
  this.props.fetch_player_cell(5)
 }
 localFetchPlayerName = async () => {
    this.props.fetch_player_name(10)
 }


  render() {
    return (
      <div className="App">
        <div>Players<span>{"ZDRE"}</span></div>
        <button onClick={this.localFetchPlayer}>Fetch players</button>
        <button onClick={this.localFetchPlayerName}>Fetch Names</button> 
          <Vatre />
      </div>
    );
  }
}
function map_state_to_props(state){
  // console.log(state)
  return {
        // players: state    
     }
}
export default connect(map_state_to_props,{fetch_player_cell, fetch_player_name})(App)
