import React from 'react'
const Searchbar = () => {

    const handleChange = () => {

    }


    return (
        <form action="#" method="GET"  className="lg:pl-3.5">
            <label htmlFor="topbar-search"  className="sr-only">Search</label>
            <div className="relative mt-1 lg:w-96">
                <div  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg  className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" name="email" id="topbar-search" className="input_feild pl-10"  placeholder="Search" />
            </div>
            {/* {
                data.searchText && <div className="py-5 px-3 w-full bg-white z-10 shadow-brandShadow rounded-sm absolute transition ">
                    <div className="search_news grid grid-cols-1 items-center">
                        {
                            loading ?
                                <div>
                                    <LoadingSpiner />
                                </div>
                                :
                                <>
                                    {
                                        result.length !== 0 ? result.map((newsInfo, index) =>
                                            <ShortNews key={index} info={newsInfo} />
                                        ) :
                                            <div>
                                                <p>No News found</p>
                                            </div>
                                    }
                                </>
                        }
                    </div>
                </div>
            } */}
        </form>
    )
}

export default Searchbar