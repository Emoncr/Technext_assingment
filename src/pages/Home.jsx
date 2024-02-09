import React, { useEffect, useState } from 'react'
import PlainLayout from '../components/MasterComponents/PlainLayout'
import UserCard from '../components/UserCard';

const Home = () => {

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("https://dummyjson.com/users");
                const data = await res.json();
                setUsersData(data["users"])
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])



    console.log(usersData);






    return (
        <>
            <PlainLayout>
                <div className='p-3 '>
                    <div className='grid grid-cols-1 min-[520px]:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4'>
                        {
                            usersData?.length != 0 && usersData?.map((userData, index) =>
                                <UserCard key={index} userInfo={userData} />
                            )
                        }
                    </div>

                </div>
            </PlainLayout>
        </>
    )
}

export default Home