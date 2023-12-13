import React, { useState, useEffect } from 'react'

// const Component = () => {
//     const [value, setValue] = useState(0);

//     const [users, setUsers] = useState([]);


//     const getData = async () => {
//         // const endpoint = 'http://jsonplaceholder.typicode.com/users';
//         const endpoint = 'http://localhost:8080/admin/';
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
        <div className="relative bg-white w-full overflow-hidden text-center text-xl text-white font-inter">

            {/* <link rel="manifest" href="%PUBLIC_URL%/logo512.png" /> */}
            {/* <div className={'w-full h-[100px] bg-slate-300 bg-'}> */}
            <div className="w-full h-[605px]"
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

            {/* <div className{/* <div */}
            {/* className="absolute top-[10px] w-full h-[1px] object-cover bg-slate-300" */}
            {/* /> */}

            {/* <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] flex flex-col items-start justify-start text-left text-5xl text-gray-200">
                <div className="bg-dimgray w-[1440px] flex flex-col items-center justify-center py-[35px] px-2.5 box-border">
                    <div className="rounded-6xl bg-white w-[700px] flex flex-row items-center justify-start py-0 pr-0 pl-[30px] box-border gap-[20px] opacity-[0.85]">
                        <b className="self-stretch flex-1 relative flex items-center">
                            Enter your email address
                        </b>
                        <div className="rounded-6xl bg-royalblue w-[174px] h-24 flex flex-row items-center justify-center py-5 px-[25px] box-border text-white">
                            <b className="relative">Join Now</b>
                        </div>
                    </div>
                </div>
                <div className="bg-black w-[1440px] flex flex-col items-center justify-center py-[50px] px-[500px] box-border gap-[50px] text-center text-29xl text-white">
                    <div className="self-stretch flex flex-row items-center justify-center p-2.5">
                        <b className="relative">Contact Us</b>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[25px] text-left text-xl">
                        <div className="w-[600px] flex flex-row items-center justify-center gap-[40px]">
                            <b className="flex-1 relative">Names</b>
                            <div className="relative rounded-3xs bg-gainsboro-200 w-[460px] h-[50px]" />
                        </div>
                        <div className="w-[600px] flex flex-row items-center justify-center gap-[40px]">
                            <b className="flex-1 relative">Email</b>
                            <div className="relative rounded-3xs bg-gainsboro-200 w-[460px] h-[50px]" />
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[40px]">
                            <b className="relative inline-block w-[100px] h-[50px] shrink-0">
                                Message:
                            </b>
                            <div className="relative rounded-3xs bg-gray-300 w-[460px] h-[150px]" />
                        </div>
                        <div className="self-stretch flex flex-col items-end justify-center">
                            <div className="rounded-xl bg-royalblue w-[198px] flex flex-row items-center justify-center py-5 px-[15px] box-border">
                                <b className="relative">Send</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="absolute top-[917px] left-[120px] flex flex-col items-start justify-start gap-[30px] text-left text-21xl text-black">
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-center text-29xl">
                    <b className="relative">Our Features</b>
                </div>
                <div className="flex flex-row items-start justify-start py-2.5 px-0 gap-[70px]">
                    <img
                        className="relative rounded-6xl w-[593px] h-[404px] object-cover"
                        alt=""
                        src="/rectangle-8@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
                        <b className="relative flex items-center w-[470px]">
                            Easy Ticket Booking
                        </b>
                        <div className="relative text-5xl font-medium text-gray-400 flex items-center w-[511px]">
                            Our user-friendly ticketing booking system allows you to
                            conveniently purchase tickets of your choice any time you want to
                            travel.
                        </div>
                        <div
                            className="rounded-xl bg-royalblue w-[198px] flex flex-row items-center justify-center py-5 px-[15px] box-border cursor-pointer text-xl text-white"
                            onClick={onBookMainCTA2Click}
                        >
                            <b className="relative">Book Ticket Now</b>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start py-2.5 px-0 gap-[70px]">
                    <img
                        className="relative rounded-6xl w-[603px] h-[417px] object-cover"
                        alt=""
                        src="/rectangle-81@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
                        <b className="relative flex items-center w-[470px]">
                            Quick e-Invoice
                        </b>
                        <div className="relative text-5xl font-medium text-gray-400 flex items-center w-[511px]">
                            <span className="[line-break:anywhere] w-full">
                                <p className="[margin-block-start:0] [margin-block-end:14px]">
                                    Elevate your bus ticketing experience with our advanced
                                    e-invoice system!
                                </p>
                                <p className="m-0">
                                    Streamline transactions, cut paperwork, and enjoy swift,
                                    hassle-free payments for a more efficient and eco-friendly
                                    journey."
                                </p>
                            </span>
                        </div>
                        <div className="rounded-xl bg-royalblue w-[198px] flex flex-row items-center justify-center py-5 px-[15px] box-border text-xl text-white">
                            <b className="relative">Learn More</b>
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default HomePage;
