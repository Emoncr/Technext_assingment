import React, { useEffect, useState } from 'react'
import SiteNavWraper from '../components/MasterComponents/SiteNavWraper'
import UserDetailsCard from '../components/UserDetailsCard';
import LoadingSpiner from '../components/LoadingSpiner';
import { useNavigate, useParams } from 'react-router-dom';


const UserDetails = () => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false)

    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://dummyjson.com/users/${parseInt(params.id)}`);
                const data = await res.json();

                setUserData(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        })()
    }, [])

    console.log(userData);



    return (

        <SiteNavWraper>
            <div className="w-full py-16 lg:py-20 px-6">
                <div className="pb-10 px-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {
                        loading
                            ?
                            <div className='mt-10'>
                                <LoadingSpiner />
                            </div>
                            :
                            <UserDetailsCard userData={userData} />
                    }
                    <div className='mt-10 flex items-center justify-center'>
                        <button
                            onClick={() => navigate(`/user/update/${userData.id && userData.id}`)}
                            className="brand_btn ">
                            Update this user
                        </button>
                        
                    </div>
                </div>
            </div>
        </SiteNavWraper>
    )
}

export default UserDetails