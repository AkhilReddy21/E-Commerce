import { authConstants } from "../actions/constants";

const initState = {
    name: 'Akhil'
};

export default function variable (state = initState, action)  {
    
    console.log(action);

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }
            break;
        default:
            
    }


    return state;
}