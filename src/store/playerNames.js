
const initialState = {
    player_names: [] 
}

export default (state = initialState, actions) => {
        if(actions.type === "GET_NAMES"){
            return actions.payload
        }
        return state;
    }