export const ACTION = {
    USER_LOGIN_INFO: "USER_LOGIN_INFO",
};

export const userLoggedIn = (data) => {
    return {
        type: ACTION.USER_LOGIN_INFO,
        payload: data,
    };
};
