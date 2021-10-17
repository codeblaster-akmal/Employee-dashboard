import { ACTION } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.USER_LOGIN_INFO:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};
