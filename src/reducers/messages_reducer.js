// import FETCH_MESSAGES from '../actions/index.js';

export default function(state = null, action) {

    switch (action.type) {
        case "FETCH_MESSAGES":
            const messages = action.payload.messages;
            return messages;
        case "CREATE_MESSAGE":
            const copiedState = state.slice(0);
            copiedState.push(action.payload);
            return copiedState;
        default:
            return state;

        
    }
  }