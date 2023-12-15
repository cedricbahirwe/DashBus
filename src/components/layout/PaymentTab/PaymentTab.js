import React from "react";
import './PaymentTab.css';
import { Link } from 'react-router-dom';
// import jwt_decode from 'jwt-decode'


export default class App extends React.Component {

    paymentMethods = ["momo", "paypal", "other"];

    componentDidMount() {
        // const tok = sessionStorage.getItem("authToken")
        // const decoded = jwt_decode(tok)
        // this.setState({ token: decoded.user })
    }

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({ formData });
        this.form.reset();
    };

    moveToTicketPage = (e) => {
        e.preventDefault()
        // localStorage.setItem("paymentData", JSON.stringify(this.state.token))
        window.alert('Payment Successful.')
        window.location.href = "/book/ticket"
    }

    renderNamesOfPassenger = () => {
        let passArray = localStorage.getItem('nameData')
        if (passArray) {
            let nameArray = JSON.parse(passArray)
            console.log(nameArray)
            return nameArray[0]
        }
    }

    renderSeatNumbers = () => {
        let seatArray = localStorage.getItem('reservedSeats')
        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            return seaArr.map((seat, idx) => {
                return (
                    <p key={idx}>{seat}</p>
                )
            })
        }
    }

    getSumTotal = () => {
        let count = 0
        let tax = 150
        let seatArray = localStorage.getItem('reservedSeats')
        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            for (let i = 0; i < seaArr.length; i++) {
                count++
            }
            return (
                <div>
                    <hr className="hr3" />
                    <p>{1000 * count}</p>
                    <p>+{tax}</p>
                    <p>{(1000 * count) + tax}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="flex space-x-4 bg-red-300 p-5">

                <div className="App-payment self-baseline border border-solid border-[#e2e2e2] rounded-lg flex-shrink overflow-hidden">

                    <div className="flex justify-between p-3">
                        <h2 className="m-0">Choose Payment Method</h2>
                        <button onClick={e => this.moveToTicketPage(e)} className="font-bold bg-gradient-to-r from-cyan-500 to-royalblue transition ease-in-out  hover:-translate-y-1 hover:scale-110 text-white border-none rounded-lg px-5 py-3">
                            Continue
                        </button>
                    </div>

                    <hr className='h-[1px] bg-[#e2e2e2] border-none m-0' />

                    <div className="flex">
                        {
                            this.paymentMethods.map(pMethod => {
                                return (
                                    <div key={pMethod} className="bg-slate-300 w-auto">

                                        <img
                                            className="w-full"
                                            alt={'/' + { pMethod } + '.png'}
                                            src={process.env.PUBLIC_URL + '/' + pMethod + '.png'}
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

                <div className="flex flex-col w-[40%] flex-auto p-6 border border-solid border-[#e2e2e2] rounded-lg">
                    <h3>Baljeet Travels</h3>
                    <div>
                        <p>BOOKING DETAILS</p>
                        <div className="row">
                            <div className="col-6 pt">
                                <p className="hdng">Username</p>
                                <hr className="hr3" />
                                <p className="hdng">Date</p>
                                <p className="hdng">From</p>
                                <p className="hdng">To</p>
                                <hr className="hr3" />
                                <p className="hdng">Passengers</p>
                                {this.renderNamesOfPassenger()}
                                <hr className="hr3" />
                                <p className="hdng">Ticket price</p>
                                <p className="hdng">Tax</p>
                                <p className="hdng">Toal Sum</p>

                            </div>
                            <div className="col-6">
                                <hr className="hr3" />
                                <p className="usrName">{localStorage.getItem("date")}</p>
                                <p className="usrName">{localStorage.getItem("start")}</p>
                                <p className="usrName">{localStorage.getItem("destination")}</p>
                                <hr className="hr3" />
                                <p className="hdng">Seat No</p>
                                {this.renderSeatNumbers()}
                                <p>{this.getSumTotal()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
