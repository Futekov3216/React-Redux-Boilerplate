
const initialState = {
    players_cell: [] 
}

export default (state = initialState, actions) => {
        if(actions.type === "GET_PLAYERS"){
            return actions.payload
        }
        return state;
    }
