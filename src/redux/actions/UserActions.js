import {
    SUBSCRIBE 
} from '../actions';

export const subscribe = (user) => dispatch => {
    dispatch({
        type: SUBSCRIBE,
        payload: user
    })
}