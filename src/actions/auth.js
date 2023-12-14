import axios from 'axios';
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from './types'
import setAuthToken from '../utils/setAuthToken'

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const userId = localStorage.getItem('userId');

    try {
        const res = await axios.get('http://localhost:8080/admin/' + userId);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: AUTH_ERROR
        })
    }

}

export const register = ({ name, email, password, contact, dob, gender }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password, contact, dob, gender });
    try {
        const res = await axios.post('/api/users', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
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
        const res = await axios.post('http://localhost:8080/admin/login', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        console.log('Reached Here', res.data);

        setManualToken(res.data.id);
        dispatch(loadUser())
    } catch (err) {
        console.log('Errors:', err.response.data.error);

        dispatch(setAlert(err.response.data.error, 'danger'));
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({ type: LOGOUT })
}