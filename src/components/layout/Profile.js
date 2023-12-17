import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentProfile, removeTicket } from '../../actions/profile'

const Profile = ({ getCurrentProfile, removeTicket, auth: { user } }) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    const removeAndReload = async (id) => {

        removeTicket(id)
        getCurrentProfile()

    }


    return (
        <Fragment>
            <div className="bg-slate-200 my-10 rounded-3xl p-5">
                <div className="profile-top bg-primary p-2">
                    <img
                        className="w-[50px] h-[50px] object-cover"
                        alt='Logo of DashBus'
                        src={process.env.PUBLIC_URL + '/appLogo.png'}
                    />

                    <h2>Username: @{user && user.username}</h2>
                    <h2>Full Name: {user && user.firstName + ' ' + user.lastName}</h2>
                    <div className='text-royalblue'>
                        {user && user.email &&
                            <h3>
                                🏹 {user && user.email}
                            </h3>
                        }

                        {user && user.phoneNumber &&
                            <h3 >
                                🏹 {user && user.phoneNumber}
                            </h3>

                        }

                        {user && user.email &&
                            <h3 className='text-royalblue'>
                                🏹 {user && user.email}
                            </h3>
                        }
                    </div>
                </div>
                <div className="bg-white rounded-2xl px-5 py-2">
                    <h2 className="text-primary">Booked Tickets</h2>
                    <ul className='grid'>
                        {
                            user && user.tickets.length > 0 ?
                                (<Fragment>
                                    {user.tickets.map(ticketOrder =>
                                        <li className='bg-slate-300 bg-opacity-30 rounded-lg list-none p-3 my-3' key={ticketOrder.id}>
                                            <div className="container1">
                                                <div className="card">
                                                    <div className="box">
                                                        <div className="content">
                                                            <h2>{ticketOrder.id}</h2>
                                                            <h3>{ticketOrder.ticket.price} RWF</h3>
                                                            <h3>{ticketOrder.ticket.origin.name} - {ticketOrder.ticket.destination.name}</h3>
                                                            {/* <span> <h1>Destination:- </h1> <strong> [{] </strong> </span> */}
                                                            {/* <button className="btn btn-danger" >Delete Ticket</button> */}
                                                            <button onClick={() => removeTicket(ticketOrder.id)} className="border-none py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                                                Delete Ticket
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                </Fragment>
                                ) : (<h4 className='w-full text-red-600 text-center italic'>No Tickets Orders Found.</h4>)}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}



Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    removeTicket: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, removeTicket })(Profile)
