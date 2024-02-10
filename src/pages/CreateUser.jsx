import React from 'react'
import SiteNavWraper from '../components/MasterComponents/SiteNavWraper'
import AddUserForm from '../components/Site Forms/AddUserForm'

const CreateUser = () => {
    return (
        <SiteNavWraper>
            <div className='w-full py-16 lg:py-20 px-6'>
                <div className="pb-10 p-4 lg:p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <h1 className='text-lg lg:text-2xl text-center text-gray-900 rounded-lg  dark:text-gray-200 font-medium font-barlow  uppercase'>Create a new user</h1>
                    </div>
                    <div className='mt-3 md:mt-5'>
                        <AddUserForm />
                    </div>
                </div>
            </div>
        </SiteNavWraper>
    )
}

export default CreateUser