import React from 'react'

const UserDetailsCard = ({ userData }) => {

    const { image, firstName, lastName, email, company, address, id, maidenName, username, phone, eyeColor, gender, domain, age } = userData;



    return (
        <div className="pb-10 px-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex flex-col items-center'>
                <img className="lg:w-28 lg:h-28 w-20 h-20 -mt-10 lg:-mt-14 bg-red-400 rounded-full shadow-lg" src={image} alt="user  image" />

                <h5 className="mb-1 text-xl lg:text-3xl mt-3  text-gray-900 dark:text-white font-inter font-semibold">{firstName} {maidenName} {lastName}</h5>

            </div>
            <div className='px-2 max-w-7xl mx-auto'>


                <div className='mt-4 lg:mt-6' >
                    <p className='text-lg lg:text-2xl text-left text-gray-900 rounded-lg  dark:text-gray-200 font-medium font-barlow mb-2' >Personal Informations
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3'>
                        <p className="deatils_text">Email: {email}</p>
                        <p className="deatils_text">Username: {username}</p>
                        <p className="deatils_text">Phone: {phone}</p>
                        <p className="deatils_text">Age: {age}</p>
                        <p className="deatils_text">Eye color: {eyeColor}</p>
                        <p className="deatils_text">Gender: {gender}</p>
                        <p className="deatils_text">Domain: {domain}</p>
                    </div>
                </div>




                <div className='mt-4 lg:mt-6' >
                    <p className='text-lg lg:text-2xl text-left text-gray-900 rounded-lg  dark:text-gray-200 font-medium font-barlow mb-2' >Company Informations
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3'>
                        <p className="deatils_text">Name: {company?.name}</p>
                        <p className="deatils_text">title: {company?.title}</p>
                        <p className="deatils_text">Department: {company?.department}</p>
                    </div>
                </div>


                <div className='mt-4 lg:mt-6' >
                    <p className='text-lg lg:text-2xl text-left text-gray-900 rounded-lg  dark:text-gray-200 font-medium font-barlow mb-2' >Address
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3'>
                        <p className="deatils_text">Address: {address?.address}</p>
                        <p className="deatils_text">City: {address?.city}</p>
                        <p className="deatils_text">State: {address?.state}</p>
                        <p className="deatils_text">PostalCode: {address?.postalCode}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDetailsCard