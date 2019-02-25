import axios from 'axios';

export const fetch_player_cell = (num) => async dispatch => {
    const res = await axios.get(`https://randomuser.me/api/?results=` + num)

   dispatch({
       type: 'GET_PLAYERS',
       payload: res.data.results
   })
}

export const fetch_player_name = (num) => async dispatch => {
    const res = await axios.get(`https://randomuser.me/api/?results=` + num)

   dispatch({
       type: 'GET_NAMES',
       payload: res.data.results
   })
}