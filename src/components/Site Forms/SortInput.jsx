import React from 'react'
import toast from 'react-hot-toast';
import { IoIosArrowDown } from "react-icons/io";

const SortInput = ({ userInfo }) => {

    const { usersData, setUsersData } = userInfo;



    const handleChange = (e) => {
        const optionValue = e.target.value;
        if (optionValue === "") return;

        if (optionValue === "company") {
            const sortedData = [...usersData].sort((a, b) => a.company.name.localeCompare(b.company.name));
            setUsersData(sortedData);
            toast.success("Result sorted a-z by company name")
            return
        }
        if (optionValue === "email") {
            const sortedData = [...usersData].sort((a, b) => a.email.localeCompare(b.email));
            setUsersData(sortedData);
            toast.success("Result sorted a-z by email")
            return
        }
        else {
            const sortedData = [...usersData].sort((a, b) => a.firstName.localeCompare(b.firstName));
            setUsersData(sortedData);
            toast.success("Result sorted a-z by name")
            return
        }
    }


    return (
        <div className='relative'>
            <select onChange={(e) => handleChange(e)} className='input_feild' name="sort" id="sortData">
                <option value={""}>Select an option</option>
                <option value="firstName">Name</option>
                <option value="email">Email</option>
                <option value="company">Company Name</option>
            </select>
            <div className='absolute top-1/2 -translate-y-1/2 right-3 dark:text-white'>
                <IoIosArrowDown />
            </div>
        </div>
    )
}

export default SortInput