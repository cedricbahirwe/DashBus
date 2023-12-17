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

        if (username === '') {
            window.alert('Username should not be empty')
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
        //     <div className="flex-container">
        //         <div className="row full">
        //             <div className="col-md-12">
        //                 <div className="form-container">

        //                     <div className="row sgnUp ">
        //                         <div className="col-md-6 right-divider pdding">
        //                             <h3 className="lead-text mn-txt">
        //                                 Signup Here
        //                             </h3>
        //                             <div className="icon-soc-fb">
        //                                 Facebook
        //                             </div>
        //                             <div className="icon-soc-gg">
        //                                 Google
        //                             </div>
        //                         </div>
        //                         <div className="left-divider">
        //                             <div className="col-md-6">
        //                                 <form className="form" onSubmit={e => onSubmit(e)}>




        //                                     <div className="form-group2">
        //                                         <label htmlFor="email">Email-ID:</label>
        //                                         <input required name="email" placeholder="Ex:- baljeetsingh@gmail.com" value={email} type="email" className="form-control sgnUp" onChange={e => onChange(e)} />
        //                                     </div>



        //                                     <div className="form-group2">
        //                                         <label htmlFor="password">Password :</label>
        //                                         <input required id="password" name="password" value={password} placeholder="Ex:-Baljeet@1234" type="password" className="form-control sgnUp" onChange={e => onChange(e)} />
        //                                     </div>

        //                                     <div className="form-group2">
        //                                         <input required type="submit" value="Login" className="btn-primary btnn form-submit sub-btn sgnUp" />
        //                                     </div>
        //                                     <div>
        //                                         <small className="form-text text-muted link-text">Don't have account?
        //                                         </small>
        //                                         <span className="signuptext"><Link to="/register">Sign-In</Link></span>

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
