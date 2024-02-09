import React, { useState } from 'react'
import { FaSearch, } from 'react-icons/fa'
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import Searchbar from '../Site Forms/Searchbar';
import SortInput from '../Site Forms/SortInput';

const PlainLayout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true)
    const [IsNavToggle, setIsNavToggle] = useState(false)

    return (
        <main>
            <div className={`${darkMode ? "dark" : ""} transition-all duration-300`}>
                <div className='fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='px-3 py-3 lg:py-5 lg:px-10 lg:pl-5 relative'>
                        <div className='flex items-center justify-between'>
                            <div>
                                {
                                    darkMode ?
                                        <img className='w-[100px] lg:w-[150px]' src="/src/assets/images/logo.png" alt="LOGO" />
                                        :
                                        <img className='w-[100px] lg:w-[150px]' src="/src/assets/images/logo black.png" alt="LOGO" />
                                }
                            </div>
                            <div className='flex items-center justify-between gap-1 sm:gap-3 lg:gap-6'>
                                <button
                                    onClick={() => setIsNavToggle(!IsNavToggle)}
                                    className='p-2 text-gray-500 rounded-lg  hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden'
                                >
                                    <FaSearch />
                                </button>

                                {/* Search bar for Large device */}
                                <div className='hidden lg:block'>
                                    <Searchbar />
                                </div>


                                <button
                                    onClick={() => setDarkMode(!darkMode)}

                                    className='p-2 lg:p-3 text-gray-500 rounded-lg   hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-xl'>
                                    {
                                        darkMode ? <BsMoonStarsFill /> : <MdSunny />
                                    }
                                </button>


                                <button
                                    onClick={() => setIsNavToggle(!IsNavToggle)}
                                    className='p-2 text-gray-500 rounded-lg   hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden'
                                >

                                    {
                                        IsNavToggle ?
                                            // Cross Icon
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                            :
                                            // Humburger Icon
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                    }
                                </button>
                            </div>
                        </div>

                        {/* Sidebar for mobile */}
                        <aside className={`fixed top-16 left-0 z-20 flex flex-col flex-shrink-0 ${IsNavToggle ? "w-full" : "w-0"} h-full font-normal transition-all delay-300 duration-300  lg:hidden bg-gray-300/50 dark:bg-gray-900/50`}>

                            <div className='relative flex flex-col flex-1 h-full pt-0 w-2/3 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700'>

                                <div className='flex flex-col flex-1 pt-5 pb-4 overflow-y-auto'>
                                    <div className='flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                                        <ul className='grid grid-cols-1 gap-6 w-full'>
                                            <li>
                                                <p className='text-base text-left text-gray-900 rounded-lg  dark:text-gray-200 font-bold font-inter mb-2'>
                                                    Sort By:
                                                </p>
                                                <SortInput />
                                            </li>
                                            <li>
                                                <Searchbar />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className='flex items-start justify-between'>
                    <div className=" relative lg:block  w-full hidden lg:max-w-[240px]  2xl:max-w-[300px] bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700  h-screen pt-[64px]  lg:pt-[87px] ">
                        <div className='py-3 px-2 lg:px-4'>
                            <p className='text-base text-left text-gray-900 rounded-lg  dark:text-gray-200 font-bold font-inter'>
                                Sort By:
                            </p>
                            <div>
                                <ul>
                                    <li className='mt-1'>
                                        <SortInput />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='h-screen overflow-y-scroll pt-[64px]  lg:pt-[87px] w-full lg:w-[calc(100%-240px)] 2xl:w-[calc(100%-300px)]  bg-gray-50  dark:bg-gray-900'>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PlainLayout