import React from 'react'

const Dispatch = () => {
  return (
    <section className='h-[90vh] p-[20px]'>
        <div className='w-full h-full bg-[#ECECEC] rounded-[20px] p-[20px]'>
           <div className='flex items-center justify-between mb-[30px]'>
           <div className='flex items-center w-[300px] h-[70px] bg-[#DADADA] rounded-[20px] overflow-hidden'>
                <div className='w-[50%] h-full  flex items-center justify-center'>Import</div>
                <div className='w-[50%] h-full bg-[#AAAAAA] rounded-[20px]'></div>
            </div>
            <div className='flex items-center gap-[10px]'>
                <p className='font-bold'>Supplier</p>
                <input className='w-[200px] h-[40px] bg-[#DADADA] outline-none' type="text" name="" id="" />
            </div>
           </div>
           <div className='flex items-center gap-[10px]'>
                <p className='font-bold'>Supplier</p>
                <input className='w-[200px] h-[40px] bg-[#DADADA] outline-none' type="text" name="" id="" />
            </div>

        </div>
    </section>
  )
}

export default Dispatch