import {combineReducers} from 'redux';
import playerreducer from './playerreducer';
import playernames from './playerNames'

export default combineReducers({
    players: playerreducer,
    playernames: playernames
})