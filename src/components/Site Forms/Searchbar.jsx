import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import SearchResult from '../SearchResult'

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)



    const handleChange = (e) => {
        if (!e.target.value) {
            setSearchResult([])
        }
        else {
            setSearchQuery(e.target.value)
        }
    }


    useEffect(() => {
        if (!searchQuery) return
        (async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://dummyjson.com/users/search?q=${searchQuery}&limit=${15}`);
                const data = await res.json();
                setSearchResult(data["users"])
                setLoading(false)
            } catch (error) {
                setLoading(false)
                toast.error("Something went wrong")
                console.log(error);

            }
        })()
    }, [searchQuery])

    console.log(searchResult);
    console.log(searchQuery);


    return (
        <div className="lg:pl-3.5 relative">
            <label htmlFor="topbar-search" className="sr-only">Search</label>
            <div className="relative mt-1 lg:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input
                    autoComplete='off'
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="search"
                    id="topbar-search"
                    className="input_feild pl-10"
                    placeholder="Search"
                />
            </div>
            {
                searchQuery !== "" &&
                <div>
                    {
                        //Check Result is Empty or not
                        searchResult?.length !== 0 ?
                            <div className="p-3  w-full  bg-gray-50  dark:bg-gray-900 border border-gray-200 rounded-lg shadow  dark:border-gray-700 z-50 max-w-full lg:max-w-[384px] mx-auto absolute transition ">
                                <div className='search_scrollber max-h-[250px] lg:max-h-[660px] overflow-y-scroll '>
                                    <div className="search_news grid grid-cols-1 gap-4 items-center">
                                        {
                                            loading ?
                                                <div>
                                                    <p class="text-sm lg:text-lg text-gray-800 dark:text-gray-200">
                                                        Loading...
                                                    </p>
                                                </div>
                                                :
                                                <>
                                                    {
                                                        searchResult.length !== 0 && searchResult.map((user, index) =>
                                                            <SearchResult key={index} userInfo={user} />
                                                        )
                                                    }
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='p-3  w-full  bg-gray-50  dark:bg-gray-900 border border-gray-200 rounded-lg shadow  dark:border-gray-700 z-50 max-w-full lg:max-w-[384px] mx-auto max-h-[500px] lg:max-h-[660px] overflow-y-scroll absolute transition '>
                                <p class="text-sm lg:text-lg text-gray-500 dark:text-gray-400">No Result Found!</p>
                            </div>
                    }
                </div>
            }

        </div>
    )
}

export default Searchbar