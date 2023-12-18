import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <>
            <li className='grow'>
                <Link className='text-white no-underline' to="/profile">
                    Profile
                </Link>
            </li>

            <li className='grow'>
                <a onClick={logout} href="#!" className='text-white no-underline' to="/profile">
                    Logout
                </a>
            </li>
        </>
    )

    const guestLinks = (
        <>
            <li className='grow'><Link className='text-white no-underline' to="/login">Login</Link></li>
            <li className='grow'><Link className='text-white no-underline' to="/register">Register</Link></li>
        </>
    )

    return (
        <nav className="font-bold bg-dimgray text-center text-xl font-inter py-1 rounded-2xl">
            <div className='flex flex-row w-[80%] mx-auto gap-3 px-1'>
                <ul className='flex flex-row w-full items-center justify-center list-none'>
                    <li className='grow'><Link className='text-white no-underline' to="/">DashBus</Link> </li>
                    <Fragment>
                        {isAuthenticated ? authLinks : guestLinks}
                    </Fragment>
                </ul>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavBar)
