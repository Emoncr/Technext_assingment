import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const SortInput = () => {
    return (
        <div className='relative'>
            <select className='input_feild' name="sort" id="sortData">
                <option>Select an option</option>
                <option value="email">Name</option>
                <option value="email">Email</option>
                <option value="email">Company Name</option>
            </select>
            <div className='absolute top-1/2 -translate-y-1/2 right-3 dark:text-white'>
                <IoIosArrowDown />
            </div>
        </div>
    )
}

export default SortInput