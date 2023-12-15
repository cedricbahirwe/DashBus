import React, { useState } from 'react'
import './PaymentTab.css';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default class App extends React.Component {

    paymentMethods = ["momo", "paypal", "other"];
    state = {
        paymentMethod: "momo",
        selectedTicket: null,
        ticketCount: 1,
        ticketDiscount: 0,
        totalAmount: 0
    }

    calculateDiscount = () => {
        if (!this.state.selectedTicket) {
            return;
        }
        const total = this.state.selectedTicket.price * this.state.ticketCount;
        const disc = ((this.state.selectedTicket.discount ?? 0.0) * total) / 100;

        this.setState({
            totalAmount: total,
            ticketDiscount: ((this.state.selectedTicket.discount ?? 0.0) * total) / 100
        })
    }

    componentDidMount() {
        const ticketData = localStorage.getItem("selectedTicket");

        const selectedTicket = JSON.parse(ticketData);

        this.setState({
            selectedTicket: selectedTicket,
            totalAmount: selectedTicket.price,
            ticketDiscount: ((selectedTicket.discount ?? 0.0) * selectedTicket.price) / 100
        })

        this.calculateDiscount(this.state.selectedTicket);
    }

    handlePaymentMethodChange = (value) => {
        this.setState({
            paymentMethod: value
        });
    };

    increment = () => {
        if (this.state.ticketCount < this.state.selectedTicket.remainingPlaces) {
            this.state.ticketCount += 1
            this.calculateDiscount();
        }
    };

    decrement = () => {
        if (this.state.ticketCount > 1) {
            this.state.ticketCount -= 1
            this.calculateDiscount();
        }
    };

    moveToTicketPage = (e) => {
        e.preventDefault()
        // localStorage.setItem("paymentData", JSON.stringify(this.state.token))
        window.alert('Payment Successful.')
        window.location.href = "/book/ticket"
    }

    render() {
        return (
            <div className="flex space-x-4 py-5">

                <div className="App-payment self-baseline border border-solid border-[#e2e2e2] rounded-lg flex-shrink overflow-hidden">
                    <div className="flex justify-between p-3">
                        <h2 className="font-inter  m-0">Choose Payment Method</h2>
                        <button onClick={e => this.moveToTicketPage(e)} className="font-bold bg-gradient-to-r from-cyan-500 to-royalblue transition ease-in-out  hover:-translate-y-1 hover:scale-110 text-white border-none rounded-lg px-5 py-3">
                            Continue
                        </button>
                    </div>

                    <hr className='h-[1px] bg-[#e2e2e2] border-none m-0' />

                    <div className="flex">
                        {
                            this.paymentMethods.map(pMethod => {
                                return (
                                    <div key={pMethod} className={`w-auto ${pMethod === this.state.paymentMethod ? 'border-4 border-solid border-collapse border-green-600' : ''}`}>

                                        <img
                                            className="w-full h-full object-cover"
                                            alt={'Logo of ' + pMethod}
                                            src={process.env.PUBLIC_URL + '/' + pMethod + '.png'}
                                            onClick={() => this.handlePaymentMethodChange(pMethod)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="bg-[#F8F8F8] bg-opacity-45 p-3">
                        <p className="text-sm font-inter text-[#829BA4]">
                            Mobile Money is to be chose for payment.
                            Please Pay for the goods within 24 hours after placing the order. Otherwise, the order will be cancelled.
                            Thanks for your cooperation.
                        </p>
                    </div>
                </div>

                {this.state.selectedTicket &&
                    <div className="flex flex-col w-[40%] flex-auto font-inter border border-solid border-[#e2e2e2] rounded-lg">
                        <h3 className='m-0 p-3'>E-Ticket</h3>
                        <div className='bg-[#F8F8F8] p-2'>
                            <div>
                                <p><b>Main Contact - </b>{this.state.selectedTicket.admin.firstName} {this.state.selectedTicket.admin.lastName}</p>
                                <hr />
                                <p><b>Phone - </b>{this.state.selectedTicket.admin.phoneNumber}</p>
                            </div>
                        </div>

                        <div>
                            <hr className='mx-3' />

                            <p className='px-2'>
                                <b>{format(new Date(), 'EEE, MMM dd, yyyy')}</b>
                            </p>
                            <hr className='mx-3' />

                            <div className='flex flex-col space-y-2 px-2'>
                                <p className='m-0'><b className='text-[#829BA4]'>Depart: </b>{format(new Date(this.state.selectedTicket.departureDateTime), 'HH:mm a')}</p>
                                <p className='m-0 text-[#829BA4]'><b>{this.state.selectedTicket.origin.name}, {this.state.selectedTicket.origin.abbrev}</b></p>
                                <p className='m-0'><b className='text-[#829BA4]'>Code: </b>{this.state.selectedTicket.origin.slang}</p>
                            </div>
                            <hr className='border-t-[1px] border-dashed border-[#e2e2e2] mx-3'></hr>

                            <div className='flex flex-col space-y-2 px-2'>
                                <p className='m-0'><b className='text-[#829BA4]'>Arrival: </b>{format(new Date(this.state.selectedTicket.arrivalDateTime), 'HH:mm a')}</p>
                                <p className='m-0 text-[#829BA4]'><b>{this.state.selectedTicket.destination.name}, {this.state.selectedTicket.destination.abbrev}</b></p>
                                <p className='m-0'><b className='text-[#829BA4]'>Code: </b>{this.state.selectedTicket.destination.slang}</p>
                            </div>
                            <hr className='mx-3' />

                        </div>

                        <div className='flex flex-row space-x-2 justify-between items-center px-2 my-2'>
                            <b className='text-[#829BA4]'>No. of Tickets</b>

                            <div className="stepper-container">
                                <button className="stepper-button" onClick={this.decrement}>-</button>
                                <span className="stepper-count">{this.state.ticketCount}</span>
                                <button className="stepper-button" onClick={this.increment}>+</button>
                            </div>
                        </div>

                        <hr className='h-[1px] bg-[#e2e2e2] border-none m-0 mx-3' />

                        <div className='flex flex-row space-x-2 justify-between items-center px-2 py-2'>
                            <b className='text-[#829BA4] font-normal'>Total: </b>
                            <b className='text-red-500'>RWF {this.state.totalAmount}</b>
                        </div>

                        <div className='flex flex-row space-x-2 justify-between items-center px-2 py-2'>
                            <b className='text-[#829BA4] font-normal'>Disount: </b>
                            <b className='text-red-500'>- RWF {this.state.ticketDiscount}</b>
                        </div>

                        <hr className='h-[1px] bg-[#e2e2e2] border-none m-0 mx-3' />

                        <div className='flex flex-row space-x-2 justify-between items-center px-2'>
                            <h1>Due</h1>
                            <h1 className='text-royalblue'>RWF {(this.state.totalAmount - this.state.ticketDiscount).toLocaleString()}</h1>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
