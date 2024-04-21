import React from 'react'
import GoBack from "../../assets/images/Go-back.svg"

import { Link } from 'react-router-dom'
const Staff = () => {
    const data = [
        {
            id: 344568,
            make: "Chevrolet",
            model: "Nexia-2",
            description: "more",
            status: "Acrive"
        },
        {
            id: 344568,
            make: "BYD",
            model: "Chazor",
            description: "more",
            status: "Acrive"
        },
        {
            id: 344568,
            make: "Chevrolet",
            model: "Nexia-2",
            description: "more",
            status: "not in use"
        },
        {
            id: 344568,
            make: "BYD",
            model: "Chazor",
            description: "more",
            status: "Acrive"
        },
        {
            id: 344568,
            make: "Chevrolet",
            model: "Nexia-2",
            description: "more",
            status: "Acrive"
        },
        {
            id: 344568,
            make: "BYD",
            model: "Chazor",
            description: "more",
            status: "not in use"
        },
        {
            id: 344568,
            make: "BYD",
            model: "Chazor",
            description: "more",
            status: "not in use"
        },
        {
            id: 344568,
            make: "BYD",
            model: "Chazor",
            description: "more",
            status: "not in use"
        },



    ]
    return (
        <section className='AddAvtomobile h-[90vh]'>
            <div className='h-full flex flex-col p-[20px] gap-[25px]'>
                <div className='h-[10%] flex items-center w-full'>
                    <Link to="/admin/avtomobile/admin">
                    <img src={GoBack} alt="" />
                    </Link>
                    <div className='flex items-center justify-center w-full gap-[50px]'>
                        <button className='border-[1px] border-[#AAAAAA] rounded-[10px] w-[193px] h-[60px] text-[27px] font-medium'><Link to="/admin/avtomobile/branches">Branches</Link></button>
                        <button className='border-[1px] border-[#AAAAAA] rounded-[10px] w-[193px] h-[60px] text-[27px] font-medium'> <Link to="/admin/avtomobile/haulers">Haulers</Link></button>
                        <button className='border-[1px] border-[#AAAAAA] rounded-[10px] w-[193px] h-[60px] text-[27px] font-medium'> <Link to="/admin/avtomobile/staff">Staff</Link></button>
                    </div>
                </div>
                <div className='h-[90%] bg-[#ECECEC] rounded-[15px] p-[20px] flex flex-col gap-[20px]'>
                    <div className='flex items-center justify-between h-[10%]'>
                        <Link to="/admin/avtomobile/create">
                            <button className='bg-[#03AB00] text-white py-[10px] px-[20px] rounded-[10px]'>Create</button>
                        </Link>
                        <h2 className='text-[30px] font-medium'>
                            Staff
                        </h2>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='relative overflow-hidden'>
                                <input className='outline-none px-[20px] w-[250px] h-[40px] rounded-[30px]' placeholder='search' type="text" />
                                <div className='absolute top-[5px] right-[10px] bottom-0'>🔍</div>
                                <div className='w-[220px] absolute left-[20px] top-[30px] h-[1px] bg-black'></div>
                            </label>
                            <div className='flex items-center justify-center gap-[15px]'>
                                <Link to="/admin/avtomobile/edit">
                                <button className='text-[16px] border-[1px] border-[#000000] px-[3px] rounded-[5px]'>🖍</button>
                                </Link>
                                <button className='text-[16px] border-[1px] border-green-600 px-[3px] rounded-[5px] text-green-600'>active</button>
                                <button className='text-[16px] border-[1px] border-red-700 px-[3px] rounded-[5px] text-red-700 font-medium'>no use</button>
                            </div>
                        </div>
                    </div>

                    <table className="w-full table-auto border-collapse">
                        <thead className='bg-[#aaaaaa]'>
                            <tr>
                                <th>
                                    <input className='w-[15px] h-[15px]' type="checkbox" />
                                </th>
                                <th>ID</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((items, index) => (
                                <tr key={index}>
                                    <td><input className='w-[15px] h-[15px]' type="checkbox" /></td>
                                    <td>{items.id}</td>
                                    <td>{items.make}</td>
                                    <td>{items.model}</td>
                                    <td className='underline'>{items.description}</td>
                                    <td className={`${items.status == "not in use" ? "text-[red]" : "text-[green]"}`}>{items.status}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    )
}

export default Staff