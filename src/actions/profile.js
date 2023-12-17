import axios from 'axios'
import { setAlert } from './alert'

import {
    CLEAR_PROFILE,
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES,
    GET_REPOS
} from './types'


export const getCurrentProfile = () => async dispatch => {
    try {
        const userId = localStorage.getItem('userId');
        const res = await axios.get('http://localhost:8080/client/' + userId);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        console.log('Errors at', err)
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })

    }
}


export const removeTicket = id => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:8080/ticketOrder/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Ticket Removed', 'success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


export const searchTickets = ({ start, end }) => async (dispatch) => {

    try {
        const res = await axios.get(`http://localhost:8080/ticket/search/${start}/${end}`)
        return res.data;
    } catch (err) {
        console.log("Found", err);
        const errors = err.responses
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        console.log('error here')
    }
}

export const buyTicket = ({ ticketId, clientId, paymentMethod, ticketCount }) => async (dispatch) => {

    console.log('never called');
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const jsonBodyData = {
        ticket: { id: ticketId },
        client: { id: clientId },
        paymentType: paymentMethod,
        numberOfTickets: ticketCount
    }

    try {
        const response = await axios.post('http://localhost:8080/ticketOrder/create', jsonBodyData, config)
        console.log('Response from backend:', response.data);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error('Unsuccessful response from backend:', response.status);
            throw new Error('Unsuccessful response from the server');
        }
        return response.data;
    } catch (err) {
        console.log("Error sending data to backend:", err);
        throw err
    }
}



export const getAllTickets = () => async (dispatch) => {

    try {
        const res = await axios.get(`http://localhost:8080/ticket/`)
        return res.data;
    } catch (err) {
        console.log("Found", err);
        const errors = err.responses
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        console.log('error here')
    }
}

export const deleteExperience = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/experience/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('Experience Removed', 'success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


export const deletebuses = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/buses/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('buses Removed', 'success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}




export const deleteAccount = () => async dispatch => {
    if (window.confirm('Are you sure to delete your Account?')) {


        try {
            await axios.delete('/api/profile')

            dispatch({
                type: CLEAR_PROFILE
            })
            dispatch({
                type: ACCOUNT_DELETED
            })
            dispatch(setAlert('Your account has been permanently Deleted'))
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }

}