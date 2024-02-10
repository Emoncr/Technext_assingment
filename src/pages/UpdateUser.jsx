import React, { useEffect, useState } from 'react'
import SiteNavWraper from '../components/MasterComponents/SiteNavWraper'
import { useParams } from 'react-router-dom';
import LoadingSpiner from '../components/LoadingSpiner';
import UpdateUserForm from '../components/Site Forms/UpdateUserForm';



const UpdateUser = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const params = useParams();


    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://dummyjson.com/users/${parseInt(params.id)}`);
                const data = await res.json();
                setData(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        })()
    }, [])

console.log(data);

    return (
        <SiteNavWraper>
            <div className='w-full py-16 lg:py-20 px-6'>
                <div className="pb-10 p-4 lg:p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <h1 className='text-lg lg:text-2xl text-center text-gray-900 rounded-lg  dark:text-gray-200 font-medium font-barlow  uppercase'>
                            Update User Information
                        </h1>
                    </div>
                    <div className='mt-3 md:mt-5'>
                        {
                            loading ? <LoadingSpiner /> : <UpdateUserForm userInfo={{ data, setData }} />
                        }
                    </div>
                </div>
            </div>
        </SiteNavWraper>
    )
}

export default UpdateUser