import React, { Component } from 'react';

import {connect} from 'react-redux';

class Vatre extends Component {
    state = {
        player_cell: []
    }

    componentWillReceiveProps(nextProp){
        this.setState({
            player_cell: nextProp.players_cell
        })
    }


render() {
    // console.log(this.state.player)
    return (
        <div className="zdre">
        {this.state.player_cell.map((res, index) => {
            return <div key={index}>{res.cell}</div>
        })}
      </div>
    );
  }
}


function map_state_to_props(state){
    // console.log(state.players)
    return {
            players_cell: state.players,
          player_names: state.playernames    // must be same as initialstate in the reducer
       }
  }

export default connect(map_state_to_props)(Vatre)