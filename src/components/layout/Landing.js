import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchTickets, getAllTickets } from '../../actions/profile'
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

const Landing = ({ isAuthenticated }) => {
    const [user, exp1] = useState('Tickets there')
    const [tickets, setSearchResult] = useState(null);
    const [formData, setFormData] = useState({
        start: '',
        end: '',
    });
    const { start, end } = formData;

    const handleOrigin = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("start", e.target.value)
        console.log("Origin", start);
    }

    const handleDestination = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("destination", e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = ticket => {
        localStorage.setItem("selectedTicket", JSON.stringify(ticket));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (start.trim().length === 0 || end.trim().length === 0) {
            const tickets = await dispatch(getAllTickets());
            setSearchResult(tickets);
        } else {
            const tickets = await dispatch(searchTickets({ start, end }));
            setSearchResult(tickets);
        }

        console.log('reached here', tickets);
    }

    useEffect(() => {

        async function fetchData() {
            const tickets = await dispatch(getAllTickets());
            setSearchResult(tickets);
        }

        fetchData();
    }, [dispatch]);

    const fieldClassName = "bg-[#365B51] text-white  placeholder-white placeholder-opacity-25 font-bold text-[16px] text-center h-[50px] outline-none rounded-md rounded-md focus:outline-none focus:shadow-outline";

    if (!isAuthenticated) {
        return <Redirect to="/home" />
    }

    return (
        <div>

            <div className="bg-[#20463C] px-6 py-10 my-5 rounded-2xl">
                <div className="bg-resd-300 max-w-[60%] mx-auto main-container">
                    <form className="flex flex-col space-y-5" onSubmit={e => onSubmit(e)}>
                        <input type="text" placeholder="Where are you?" name="start" data-style="btn-new" className={fieldClassName} value={start} onChange={e => { handleOrigin(e) }} />

                        <input type="text" name="end" placeholder="Where are you going?" data-style="btn-new" className={fieldClassName} value={end} onChange={e => { handleDestination(e) }} />

                        <input type="submit" className="bg-white text-[#20463C] font-bold text-center h-[50px] text-lg rounded-md" value="Search" />
                    </form>
                </div>
            </div >

            <div>
                <div className="flex flex-col justify-start mt-0">
                    <h1 className='flex-1 text-center text-[#20463C]'>Tickets Found</h1>
                    {
                        tickets && tickets.length > 0 ? (
                            <table>
                                <tbody>
                                    {tickets.map(ticket => (
                                        <tr className='' key={ticket.id}>
                                            <td>
                                                <div>
                                                    <div>
                                                        <div className="flex h-full flex-col">
                                                            <div className='px-3 bg-[#F8F8F8] flex justify-between items-center border-[0] border-t border-solid border-[#e2e2e2] mb-3'>
                                                                <div className="flex items-center">
                                                                    <div
                                                                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-royalblue text-white flex-shrink-0">
                                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                                            strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                                        </svg>
                                                                    </div>
                                                                    <h3 className="text-base font-light flex space-x-2">
                                                                        <span>
                                                                            {ticket.origin.name}, {ticket.origin.abbrev}
                                                                        </span>
                                                                        <span>-</span>
                                                                        <span>
                                                                            {ticket.destination.name}, {ticket.destination.abbrev}
                                                                        </span>
                                                                    </h3>
                                                                </div>

                                                                <div className='flex space-x-2 items-center'>
                                                                    {ticket.discount && ticket.discount > 0 &&
                                                                        <span className='text-xs bg-green-500 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full px-3 py-2'>
                                                                            {ticket.discount}% OFF
                                                                        </span>
                                                                    }

                                                                    <h1 className='text-2xl text-royalblue'>
                                                                        RWF {ticket.price.toLocaleString()}
                                                                    </h1>
                                                                </div>

                                                            </div>

                                                            <div className="px-3 flex flex-col justify-between flex-grow">
                                                                <p className="text-xl leading-relaxed m-0">
                                                                    Remaining Tickets: {ticket.remainingPlaces} out of {ticket.defaultPlaces}
                                                                </p>
                                                                <div className='flex justify-between'>
                                                                    <p className="flex space-x-5 leading-relaxed text-base">
                                                                        <span>
                                                                            Departure - {format(new Date(ticket.departureDateTime), 'HH:mm a')} {ticket.origin.slang}
                                                                        </span>

                                                                        <span>
                                                                            Arrival - {format(new Date(ticket.arrivalDateTime), 'HH:mm a')} {ticket.destination.slang}
                                                                        </span>
                                                                    </p>
                                                                    {ticket.remainingPlaces > 0 ?
                                                                        (
                                                                            <Link to="/book/menu2" className="flex self-baseline bg-royalblue rounded-lg  text-white hover:bg-opacity-80 items-center no-underline p-3" onClick={() => { handleSubmit(ticket) }} >
                                                                                Buy Ticket
                                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                                                    strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                                </svg>
                                                                            </Link>
                                                                        ) :
                                                                        (<span href="#" className="self-baseline bg-red-600 rounded-lg bg-opacity-50 text-white  p-3">
                                                                            Sold Out
                                                                        </span>)
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (<h3 className='flex-1 text-center text-red-600'>No Tickets Matching your search.</h3>)
                    }
                </div>
            </div >
        </div >
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
    searchTickets: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { searchTickets })(Landing)
