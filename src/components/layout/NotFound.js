import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Fragment>
            <div className='flex flex-col justify-center items-center bg-slate-200 h-[500px]'>
                <h1 className="">
                    Page Not Found.
                </h1>
                <div className='flex space-x-2 items-center'>
                    <p>
                        Sorry, this page does not exist.
                    </p>
                    <Link to='/'>Go back Home</Link>
                </div>

            </div>
        </Fragment>
    )
}

export default NotFound
