import React, { useEffect, useState } from 'react'
import SiteNavWraper from '../components/MasterComponents/SiteNavWraper'
import { Link, useParams } from 'react-router-dom'
import UserDetailsCard from '../components/UserDetailsCard';
import LoadingSpiner from '../components/LoadingSpiner';


const UserDetails = () => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false)

    const params = useParams();


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





    return (

        <SiteNavWraper>
            <div className="w-full py-16 lg:py-20 px-6">
                {
                    loading ? <LoadingSpiner/> : <UserDetailsCard userData={userData} />
                }
            </div>
        </SiteNavWraper>
    )
}

export default UserDetails