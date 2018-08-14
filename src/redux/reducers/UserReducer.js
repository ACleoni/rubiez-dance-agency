import {
    SUBSCRIBE
} from '../actions';

const initState = {
    newSubscriber: {}
};

export default (state = initState, action) => {
    switch(action.type) {
        case SUBSCRIBE:
        return {
            ...state,
            newSubscriber: action.payload
        }
        default:
        return state
    }
};