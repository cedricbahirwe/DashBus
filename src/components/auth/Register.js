import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'
import { register } from '../../actions/auth'


const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        dob: '',
        phoneNumber: '',
        email: '',
        password: ''
    });
    const { firstName, lastName, username, dob, phoneNumber, email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('felt it');
        if (email === '') {
            setAlert('Username should not be empty', 'danger')

        } else if (password === '') {
            setAlert('Password should not be empty', 'danger')
        } else {
            register({ firstName, lastName, username, dob, phoneNumber, email, password })
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    const fieldClassName = "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    const labelClassName = "text-gray-700 text-sm font-bold mb-2";

    return (
        <div className="max-w-md mx-auto">
            <form className=" bg-white shadow-lg rounded px-8 py-2 mt-2" onSubmit={e => onSubmit(e)}>
                <div className='flex gap-3'>
                    <div className="flex flex-auto flex-col mb-3">
                        <label className={labelClassName} htmlFor="firstName">First Name :</label>
                        <input type="text" placeholder="John" name="firstName" value={firstName} className={fieldClassName} onChange={e => onChange(e)} />
                    </div>

                    <div className="flex flex-auto flex-col mb-3">
                        <label className={labelClassName} htmlFor="lastName">Last Name :</label>
                        <input type="text" placeholder="Smith" name="lastName" value={lastName} className={fieldClassName} onChange={e => onChange(e)} />
                    </div>
                </div>

                <div className="flex flex-col mb-3">
                    <label className={labelClassName} for="username">
                        Username
                    </label>
                    <input className={fieldClassName} id="username" type="text" placeholder="Username" onChange={e => onChange(e)} />
                </div>
                <div className="flex flex-col mb-3">
                    <label className={labelClassName} htmlFor="email">Email:</label>
                    <input required name="email" placeholder="johnsmith@gmail.com" value={email} type="email" className={fieldClassName} onChange={e => onChange(e)} />
                </div>

                <div className='flex gap-3 mb-3'>
                    <div className="flex-auto flex flex-col">
                        <label className={labelClassName} htmlFor="phoneNumber">Phone No.:</label>
                        <input required id="phoneNumber" placeholder="0780000001" type="tel" name="phoneNumber" value={phoneNumber} pattern="078[0-9]{7}" className={fieldClassName} onChange={e => onChange(e)} />
                    </div>
                    <div className="flex-auto flex flex-col">
                        <label className={labelClassName} htmlFor="dob">Date of Birth:</label>
                        <input required id="dob" type="date" className={fieldClassName} name="dob" value={dob} onChange={e => onChange(e)} />
                    </div>
                </div>

                <div className="flex flex-col mb-3">
                    <label className=" text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" minLength="6" placeholder="*******" onChange={e => onChange(e)} />
                </div>
                <div className="flex flex-col space-y-3 items-center justify-between">
                    <input className="w-full bg-royalblue border-none text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline" type="submit" value="Register" required />

                    <div className='flex items-center gap-2'>
                        <small className="text-[#888]">Already a User?
                        </small>
                        <span><Link className='text-royalblue' to="/login">Login</Link></span>
                    </div>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 DashBus. All rights reserved.
            </p>
        </div>
    )
};
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)
