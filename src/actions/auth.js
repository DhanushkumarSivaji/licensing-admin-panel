export const Types = {
    LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
    GET_USERS_SUCCESS:'GET_USERS_SUCCESS'
};

export const loginUserRequest = ({email,password}) => (
    {
    type: Types.LOGIN_USER_REQUEST,
    payload: {
        email,
        password
    }
});

export const loginUserSucess = (token) => ({
	type: Types.GET_USERS_SUCCESS,
	payload: token
});