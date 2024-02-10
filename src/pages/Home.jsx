import React, { useEffect, useState } from 'react'
import PlainLayout from '../components/MasterComponents/PlainLayout'
import UserCard from '../components/UserCard';
import LoadingSpiner from '../components/LoadingSpiner';

const Home = () => {

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://dummyjson.com/users`);
                const data = await res.json();
                setLoading(false)
                setUsersData(data["users"])
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        })()
    }, [])




    return (
        <>
            <PlainLayout>
                <div className='p-3 '>
                    <div>
                        {
                            loading ?
                                <div className='mt-10'>
                                    <LoadingSpiner />
                                </div>
                                :
                                <div className='grid grid-cols-1 min-[520px]:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4'>
                                    {
                                        usersData?.length != 0 && usersData?.map((userData, index) =>
                                            <UserCard key={index} userInfo={userData} />
                                        )
                                    }
                                </div>
                        }
                    </div>

                </div>
            </PlainLayout>
        </>
    )
}

export default Home