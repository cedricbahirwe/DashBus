import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// const Component = () => {
//     const [value, setValue] = useState(0);

//     const [users, setUsers] = useState([]);


//     const getData = async () => {
//         // const endpoint = 'http://jsonplaceholder.typicode.com/users';
//         const endpoint = 'http://localhost:8080/client/';
//         const response = await fetch(endpoint, {
//             // mode: 'no-cors',
//             headers: {
//                 // 'Cache-Control': 'no-cache',
//                 "ngrok-skip-browser-warning": "69420"
//             }
//         });

//         // console.log("Res", await response.text());
//         // console.log("Finish")
//         const users = await response.json();
//         console.log("items", users);
//         setUsers(users);
//     }

//     useEffect(() => {
//         setValue(value + 1);
//         // getData();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return (
//         <div>
//             <h1>Imported Component</h1>
//             <p>New value is {value}</p>

//             <button onClick={async () => {
//                 setValue(value + 1);
//                 await getData();

//             }}>Click me to increase</button>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>DOB</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.username}</td>
//                             <td>{user.email}</td>
//                             <td>{user.dob}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Component

import { useCallback } from "react";

const HomePage = () => {
    const onBookATicketClick = useCallback(() => {
        // Please sync "Booking Page" to the project
    }, []);

    const onBookMainCTAClick = useCallback(() => {
        // Please sync "Booking Page" to the project
    }, []);

    const onBookMainCTA2Click = useCallback(() => {
        // Please sync "Booking Page" to the project
    }, []);

    return (
        <div className="my-3 bg-white w-full overflow-hidden text-center text-xl text-white font-inter">

            <div className="w-full h-[605px] rounded-2xl"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/womanbg.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}
            >
                <div className="max-w-[60%] h-full mx-auto flex flex-col items-center justify-center text-[40px]">
                    <b className="flex flex-col space-y-6 p-5 my-2 font-inknut-antiqua [text-shadow:0px_5px_4px_rgba(0,_0,_0,_0.25)]">
                        <span>Book Your Bus Ticket</span>
                        <span>At your convenience</span>
                    </b>
                    <b className="text-[22px] my-3 text-gray-100">
                        We provide a convenient way for travelers to book their bus tickets
                        with our dedicated team of doctors at the hospital.
                    </b>
                    <b>
                        <span>
                            <p>🌟 🌟 🌟</p>
                            <p className='text-[26px] text-[#D9D9D9] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>Trusted by Thousands of travellers</p>
                        </span>
                    </b>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-[30px] text-left text-black my-5 ">
                <div className='text-4xl m3 self-center'>
                    <b>Our Features</b>
                </div>

                <div className="flex flex-row items-start justify-start py-2.5 px-0 gap-[50px]">
                    <img
                        className="bg-slate-300 rounded-3xl w-[500px] h-[300px] object-cover"
                        alt="Ritco Bus"
                        src={process.env.PUBLIC_URL + '/busritco.png'}
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
                        <b className="text-2xl">
                            Easy Ticket Booking
                        </b>
                        <div className="text-xl font-medium text-gray-400 ">
                            Our user-friendly ticketing booking system allows you to
                            conveniently purchase tickets of your choice any time you want to
                            travel.
                        </div>
                        <div
                            className="rounded-xl bg-royalblue w-[198px] text-center py-5 px-[15px] box-border cursor-pointer text-xl text-white"
                            onClick={onBookMainCTA2Click}
                        >
                            <b className="relative">Book Ticket Now</b>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start py-2.5 px-0 gap-[50px]">
                    <img
                        className="bg-slate-300 rounded-3xl w-[500px] h-[300px] object-contain"
                        alt="Bus Invoice"
                        src={process.env.PUBLIC_URL + '/invoice.png'}
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                        <b className="text-2xl pt-4">
                            Quick e-Invoice
                        </b>
                        <div className="text-xl font-medium text-gray-400">
                            <span>
                                <p className='m-0'>
                                    Elevate your bus ticketing experience with our advanced
                                    e-invoice system!
                                </p>
                                <p className='mt-2'>
                                    Streamline transactions, cut paperwork, and enjoy swift,
                                    hassle-free payments for a more efficient and eco-friendly
                                    journey."
                                </p>
                            </span>
                        </div>
                        <div className="rounded-xl bg-royalblue w-[198px] text-center py-5 px-[15px] box-border text-xl text-white">
                            <b className="relative">Learn More</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start text-left text-4xl text-gray-200">
                <div className="w-full bg-dimgray flex flex-col items-center justify-center py-[35px] px-2.5 box-border rounded-2xl">
                    <div className="rounded-[25px] flex flex-row items-center justify-start gap-[15px]">



                    </div>

                    <Link className=" text-center w-[600px] no-underline px-5 text-xl font-medium flex-none text-white bg-royalblue border-none p-4 rounded-[25px]" to="/login">
                        Join Now
                    </Link>
                </div>

                <div className="hidden w-full bg-black  flex flex-col items-center justify-center py-[50px] box-border gap-[50px] text-center text-29xl text-white">
                    <div>
                        <b>Contact Us</b>
                    </div>
                    <div className="bg-yellows-300 flex flex-col items-start justify-start gap-[25px] text-left text-xl">
                        <div className="flex flex-row items-center justify-center gap-[40px]">
                            <b className="w-[100px]">Names:</b>
                            <input className="border-none rounded-2xl bg-white bg-opacity-80  w-[460px] h-[50px]" />
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[40px]">
                            <b className="w-[100px]">Email:</b>
                            <input className="border-none rounded-2xl bg-white bg-opacity-80 w-[460px] h-[50px]" />
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[40px]">
                            <b className="w-[100px]">Message:</b>
                            <input className="border-none rounded-2xl bg-white bg-opacity-80 w-[460px] h-[150px]" />
                        </div>

                        <div className="self-stretch flex flex-col items-end justify-center">
                            <div className="rounded-xl bg-royalblue w-[198px] flex flex-row items-center justify-center py-5 px-[15px] box-border">
                                <b className="relative">Send</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default HomePage;
