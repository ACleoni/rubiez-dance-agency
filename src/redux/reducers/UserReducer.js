import {
    SET_USER
} from '../actions';

const initState = {
    userInfo: 
    {
        paid: false,
        name: '',
        email: '',
        description: '',
        addressLine: '',
        addressCity: '',
        addressState: '',
        addressCountry: '',
        addressZip: ''
    }
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_USER:
        return {
            ...state,
            userInfo: action.payload
        }
        default:
        return state
    }
};