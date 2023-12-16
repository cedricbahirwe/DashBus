import React, { useEffect, useState } from 'react'
import './TicketPage.css'
import { addTicket } from '../../../actions/profile'
import { format } from 'date-fns';

export default function TicketPage({ history }) {
    const saveData = () => {
        let from = localStorage.getItem("start")
        let to = localStorage.getItem("destination")
        let nameArray = localStorage.getItem("nameData")
        let noArray = localStorage.getItem("reservedSeats")
        let tokenData = localStorage.getItem("selectedBusId")
        let dat = localStorage.getItem("date")
        const formData = { from, to, nameArray, noArray, tokenData, dat }
        console.log(formData)
        addTicket(formData)
        console.log('first point')
        // addTicket(from, to, nameArray, noArray, tokenData, dat)
        // console.log(from, to, nameArray, noArray, tokenData, dat)
    }

    const [selectedTicket, setSticket] = useState(null);

    useEffect(() => {
        const ticketData = localStorage.getItem("selectedTicket");

        const selectedTicket = JSON.parse(ticketData);

        setSticket(selectedTicket);
    }, [])

    const printTicket = () => {
        // window.print()
        // document.getElementById('printBtn').style.display = 'none';

        let printContents = document.getElementById('ticketCard').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();

        document.body.innerHTML = originalContents;
    }

    return (
        <div className='font-inter bg-gradient-to-br from-[#20463C] to-[#199675] my-10 p-6 rounded-3xl text-white'>

            <div className='flex flex-row justify-between'>
                <div className='flex items-center space-x-1'>
                    <img
                        className="w-[50px] h-[50px] object-cover"
                        alt='App'
                        src={process.env.PUBLIC_URL + '/appLogo.png'}
                    />
                    <h1 className='text-white'>DashBus</h1>
                </div>

                <button id='printBtn' className="self-baseline border-none rounded-xl px-5 py-3 bg-royalblue text-white hover:shadow-md font-semibold" onClick={printTicket}>
                    Print Ticket
                </button>
            </div>


            <div id='ticketCard'>
                <h1 className='text-[40px] m-0 py-3 font-semibold'>
                    Hello! John Smith
                </h1>
                <div className='flex space-x-4'>
                    <div className='text-xl self-baseline flex  space-x-3 px-4 py-4 bg-white rounded-xl'>
                        <span className='text-[#829BA4]'>Confirmation ID</span>
                        <span className='text-red-500 font-bold'>8DQ85Q</span>
                    </div>

                    {selectedTicket &&
                        (
                            <div>
                                <div className='text-sm flex flex-col justify-center'>
                                    <span>Main contact <span className='text-pink-500'>{selectedTicket.admin.firstName} {selectedTicket.admin.lastName}</span></span>
                                    <span>Confirmation date <span className='text-pink-500'>{selectedTicket.admin.firstName} {selectedTicket.admin.lastName}</span></span>
                                    <span>Phone <span className='text-pink-500'>{selectedTicket.admin.phoneNumber}</span></span>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className='pt-4'>
                    {selectedTicket &&
                        <div className='flex flex-row py-3'>
                            <div className='flex flex-col flex-auto space-y-2 px-2'>
                                <p className='m-0'><b className='text-[#829BA4]'>Depart: </b>{format(new Date(selectedTicket.departureDateTime), 'HH:mm a')}</p>
                                <p className='m-0 text-[#829BA4]'><b>{selectedTicket.origin.name}, {selectedTicket.origin.abbrev}</b></p>
                                <p className='m-0'><b className='text-[#829BA4]'>Code: </b>{selectedTicket.origin.slang}</p>
                            </div>

                            <hr className='border-t-[1px] border-dashed border-[#e2e2e2] mx-3' />

                            <div className='flex flex-col flex-auto space-y-2 px-2'>
                                <p className='m-0'><b className='text-[#829BA4]'>Arrival: </b>{format(new Date(selectedTicket.arrivalDateTime), 'HH:mm a')}</p>
                                <p className='m-0 text-[#829BA4]'><b>{selectedTicket.destination.name}, {selectedTicket.destination.abbrev}</b></p>
                                <p className='m-0'><b className='text-[#829BA4]'>Code: </b>{selectedTicket.destination.slang}</p>
                            </div>
                        </div>

                    }
                </div>

            </div>


        </div>
    )
}
