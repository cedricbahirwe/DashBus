import axios from 'axios';
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from './types'
import setAuthToken from '../utils/setAuthToken'

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const userId = localStorage.getItem('userId');

    if (!userId) {
        return;
    }

    try {
        const response = await axios.get('http://localhost:8080/client/' + userId);

        if (response.status >= 200 && response.status < 300) {
            const user = response.data;
            localStorage.setItem('firstName', user.firstName)
            localStorage.setItem('lastName', user.lastName)
        }
        dispatch({
            type: USER_LOADED,
            payload: response.data
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: AUTH_ERROR
        })
    }

}

export const register = ({ firstName, lastName, username, dob, phoneNumber, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ firstName, lastName, username, dob, phoneNumber, email, password });
    try {
        const res = await axios.post('http://localhost:8080/client/register', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        setManualToken(res.data.id);
        dispatch(loadUser())
    } catch (err) {
        const error = err.response;
        if (error) {
            dispatch(setAlert(error.message, 'danger'))
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}


function setManualToken(userId) {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    // localStorage.setItem('username', username);
    // localStorage.setItem('password', password);
    localStorage.setItem('userId', userId);
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, password });
    try {
        // const res = await axios.post('/api/auth', body, config)
        const res = await axios.post('http://localhost:8080/client/login', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        console.log('Reached Here', res.data);

        setManualToken(res.data.id);
        dispatch(loadUser())
    } catch (err) {
        console.log('Errors:', err);

        dispatch(setAlert(err.response, 'danger'));
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({ type: LOGOUT })
}