import React from 'react'
import { Link } from 'react-router-dom';

const SearchResult = ({ userInfo }) => {
    const { image, firstName, lastName, email, id } = userInfo;


    return (
        <Link
            to={`/details/${id}`}
            className='w-full p-1 py-2 lg:px-3 lg:py-2 hover:bg-white bg-gray-200 transition duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:hover:bg-gray-900 dark:border-gray-700'
        >
            <div className="flex items-center flex-col sm:flex-row gap-1 lg:gap-4">
                <img className="w-8 h-8 md:w-14 md:h-14 rounded-md" src={image} alt="avater" />
                <div className="font-medium dark:text-white text-center sm:text-left px-1">
                    <h4 className='text-sm sm:text-base lg:text-lg'>{firstName} {lastName}</h4>
                    <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">Email: {email}</p>
                </div>
            </div>
        </Link>

    )
}

export default SearchResult