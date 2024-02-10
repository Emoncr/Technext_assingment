import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddUserForm = () => {
    const [data, setData] = useState({})

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!data.firstName) return toast.error("First name required");
        if (!data.lastName) return toast.error("lastName required");
        if (!data.age) return toast.error("age required");
        if (!data.email) return toast.error("email required");
        if (!data.phone) return toast.error("phone required");
        if (!data.gender) return toast.error("gender required");

        try {
            setLoading(true)
            const reqest = await fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const res = await reqest.json();
 
            setLoading(false)
            toast.success("User created successfully")

            setTimeout(() => {
                navigate(`/details/${data.id && data.id}`)
            }, 3000);

        } catch (error) {
            setLoading(false)
            toast.error("User creating failed!")
            console.log(error);
        }
    }



    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className="max-w-7xl mx-auto">

                {/* personal Information  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 md:gap-y-5'>

                    <div className="input_block">
                        <label htmlFor="firstName" >First Name * </label>
                        <input
                            value={data.firstName && data.firstName}
                            onChange={e => setData({ ...data, firstName: e.target.value })}
                            type="text"
                            id="firstName"
                            placeholder="Delfina"
                            required
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="maidenName" >Maiden Name </label>
                        <input
                            value={data.maidenName && data.maidenName}
                            onChange={e => setData({ ...data, maidenName: e.target.value })}
                            type="text"
                            id="maidenName"
                            placeholder=""
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="lastName" >Last Name *</label>
                        <input
                            value={data.lastName && data.lastName}
                            onChange={e => setData({ ...data, lastName: e.target.value })}
                            type="text"
                            id="lastName"
                            placeholder="Ziemann"
                            required
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="email" >Your Email *</label>
                        <input
                            value={data.email && data.email}
                            onChange={e => setData({ ...data, email: e.target.value })}
                            type="email"
                            id="email"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="phone" >Phone *</label>
                        <input
                            value={data.phone && data.phone}
                            onChange={e => setData({ ...data, phone: e.target.value })}
                            type="number"
                            id="phone"
                            placeholder="01883049802"
                            required
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="age" >Age *</label>
                        <input
                            value={data.age && data.age}
                            onChange={e => setData({ ...data, age: e.target.value })}
                            type="number"
                            id="age"
                            placeholder="27"
                            required
                        />
                    </div>

                    {/* Radio Button */}
                    <div>
                        <p className='mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize'>Gender *</p>
                        <div className="flex">
                            <div className="flex items-center me-4">
                                <input
                                    onChange={e => setData({ ...data, gender: e.target.value })}
                                    id="male"
                                    type="radio"
                                    value={"male"}
                                    name="gender"
                                    required
                                    defaultChecked={data.gender && data.gender === "male"}
                                    className="w-4 h-4  text-brand bg-gray-100 border-gray-300  accent-brand dark:ring-offset-gray-800  rounded-full ring-0 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="male"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Male
                                </label>
                            </div>

                            <div className="flex items-center me-4">
                                <input
                                    onChange={e => setData({ ...data, gender: e.target.value })}
                                    id="female"
                                    type="radio"
                                    value={"female"}
                                    name="gender"
                                    required
                                    defaultChecked={data.gender && data.gender === "female"}
                                    className="w-4 h-4  text-brand bg-gray-100 border-gray-300  accent-brand dark:ring-offset-gray-800  rounded-full ring-0 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="female"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Female
                                </label>
                            </div>

                            <div className="flex items-center me-4">
                                <input
                                    onChange={e => setData({ ...data, gender: e.target.value })}
                                    id="other"
                                    type="radio"
                                    value={"other"}
                                    name="gender"
                                    required
                                    defaultChecked={data.gender && data.gender === "other"}
                                    className="w-4 h-4  text-brand bg-gray-100 border-gray-300  accent-brand dark:ring-offset-gray-800  rounded-full ring-0 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="inline-checked-radio"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Other
                                </label>
                            </div>

                        </div>
                    </div>
                </div>





                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 md:gap-y-5
                mt-4 lg:mt-7'>

                    <div className="input_block">
                        <label htmlFor="company" >Company Name</label>
                        <input
                            value={data.comapny && data.comapny.name && data.comapny.name}
                            onChange={e => setData({ ...data, comapny: { ...data?.comapny, name: e.target.value } })}
                            type="text"
                            id="company"
                            placeholder="Blanda-O'Keefe"
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="tittle" >Title</label>
                        <input
                            value={data.comapny && data.comapny.title && data.comapny.title}
                            onChange={e => setData({ ...data, comapny: { ...data?.comapny, title: e.target.value } })}
                            type="text"
                            id="tittle"
                            placeholder="Help Desk Operator"
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="department" >Department</label>
                        <input
                            value={data.comapny && data.comapny.department && data.comapny.department}
                            onChange={e => setData({ ...data, comapny: { ...data?.comapny, department: e.target.value } })}
                            type="text"
                            id="department"
                            placeholder="Marketing"
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="address" >Your Address</label>
                        <input
                            value={data.address && data.address.address && data.address.address}
                            onChange={e => setData({ ...data, address: { ...data?.address, address: e.target.value } })}
                            type="text"
                            id="address"
                            placeholder="1745 T Street Southeast"
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="city" >City </label>
                        <input
                            value={data.address && data.address.city && data.address.city}
                            onChange={e => setData({ ...data, address: { ...data?.address, city: e.target.value } })}
                            type="text"
                            id="city"
                            placeholder="Dhaka"
                        />
                    </div>


                    <div className="input_block">
                        <label htmlFor="state" >State </label>
                        <input
                            value={data.address && data.address.state && data.address.state}
                            onChange={e => setData({ ...data, address: { ...data?.address, state: e.target.value } })}
                            type="text"
                            id="state"
                            placeholder="DC"
                        />
                    </div>


                </div>


                <div className='mt-5'>
                    <button
                        disabled={loading}
                        type="submit"
                        className="brand_btn"
                    >
                        {
                            loading ? "Creating..." : "Create new user"
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm