import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentProfile, removeBus } from '../../actions/profile'


const Profile = ({ getCurrentProfile, removeBus, auth: { user } }) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])
    return (
        <Fragment>
            <div className="bg-slate-200 my-10 rounded-3xl p-5">
                <div className="profile-top bg-primary p-2">
                    <i class="fa fa-user fa-5x text-royalblue"></i>
                    <h2>Username: @{user && user.username}</h2>
                    <h2>Full Name: {user && user.firstName + ' ' + user.lastName}</h2>
                    <div className='text-royalblue'>
                        {user && user.email &&
                            <h3>
                                <i className="fas fa-globe text-royalblue" /> {user && user.email}
                            </h3>
                        }

                        {user && user.phoneNumber &&
                            <h3 >
                                <i className="fas fa-phone" /> {user && user.phoneNumber}
                            </h3>

                        }

                        {user && user.email &&
                            <h3 className='text-royalblue'>
                                <i className="fas fa-envelope" /> {user && user.email}
                            </h3>
                        }
                    </div>
                </div>
                <div className="bg-white rounded-2xl px-5 py-2">
                    <h2 className="text-primary">Booked  Buses</h2>
                    {/* <ul>
                        {user && user.ticket.length > 0 ? (<Fragment>
                            {user.buses.map(bus => (
                                <li key={bus._id}>

                                    <div className="container1">
                                        <div className="card">
                                            <div className="box">
                                                <div className="content">
                                                    <h2>01</h2>
                                                    <h3>{bus.name}</h3>
                                                    <h3>{bus.company}</h3>
                                                    <span> <h1>Stops:- </h1> <strong> [{bus.stops}] </strong> </span>
                                                    <span><h1>Bus Id:- </h1>{bus._id}</span>
                                                    <button className="btn btn-danger" onClick={() => removeBus(bus._id)}>Delete Bus</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div></li>
                            ))}
                        </Fragment>) : (<h4>No Tickets Found.</h4>)}</ul> */}
                </div>
            </div>
        </Fragment>
    )
}



Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    removeBus: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, removeBus })(Profile)
