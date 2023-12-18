import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();

        if (username.trim().length < 3) {
            window.alert('Username should have at least 3 characters')
            return;
        } else if (password.trim().length < 6) {
            window.alert('Password should have at least 6 characters')
            return;
        } else {
            login(username, password)
        }
    }
    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    const fieldClassName = "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    const labelClassName = "text-gray-700 text-sm font-bold mb-2";

    return (
        <div className="max-w-md mx-auto">
            <form className=" bg-white shadow-lg rounded px-8 py-2 mt-2" onSubmit={e => onSubmit(e)}>

                <div className="flex flex-col mb-3">
                    <label className={labelClassName} htmlFor="username">
                        Username
                    </label>
                    <input className={fieldClassName} id="username" value={username} name='username' type="text" placeholder="Username" onChange={e => onChange(e)} />
                </div>

                <div className="flex flex-col mb-3">
                    <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" minLength="6" placeholder="*******" value={password} onChange={e => onChange(e)} />
                </div>

                <div className="flex flex-col space-y-3 items-center justify-between">
                    <input className="w-full bg-royalblue border-none text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline" type="submit" value="Login" required />

                    <div className='flex items-center gap-2'>
                        <small className="text-[#888]">Don't have account?</small>
                        <span><Link className='text-royalblue' to="/register">Register</Link></span>
                    </div>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 DashBus. All rights reserved.
            </p>
        </div>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
