import React from 'react'

const LoadingSpiner = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-2 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-sm animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
            </div>
        </div>
    )
}

export default LoadingSpiner