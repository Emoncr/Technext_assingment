import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserCard = ({ userInfo }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const { image, firstName, lastName, email, company, address, id } = userInfo;


    return (
        <>
            <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4 bg-red-00 relative">
                    <button
                        onClick={() => setIsDropdownActive(!isDropdownActive)}
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div id="dropdown" className={` ${isDropdownActive ? "block" : "hidden"} z-10 absolute  top-14 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pb-10 px-4">
                    <div className='flex flex-col items-center'>
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="User image" />
                        <Link to={`/details/${id}`}>
                            <h5 className="mb-1 text-xl  text-gray-900 dark:text-white font-inter font-semibold">{firstName} {lastName}</h5>
                        </Link>
                    </div>
                    <div className='px-2'>
                        <p className="text-sm text-gray-800 dark:text-gray-400 mt-1 font-inter font-semibold">Email: {email}</p>
                        <p className="text-sm  text-gray-800 dark:text-gray-400 mt-1 font-inter font-semibold">Company: {company.name}</p>
                        <p className="text-sm  text-gray-800 dark:text-gray-400 mt-1 font-inter font-semibold">Address: {address.address}</p>
                        <p className="text-sm  text-gray-800 dark:text-gray-400 mt-1 font-inter font-semibold">City: {address.city}</p>
                        <p className="text-sm  text-gray-800 dark:text-gray-400 mt-1 font-inter font-semibold">postalCode: {address.postalCode}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard