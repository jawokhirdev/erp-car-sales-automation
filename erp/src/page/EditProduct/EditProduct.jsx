import React from 'react'
import Gm from "../../assets/images/gm.svg"
import { Link } from 'react-router-dom'
const EditProduct = () => {
  return (
    <section className='h-[90vh] p-[20px] '>
      <div className='w-full h-full bg-[#ECECEC] rounded-[20px] p-[20px]'>
        <h2 className='text-[35px] font-bold text-center mb-[20px]'>Manage your organization</h2>
        <div className='grid gap-[30px] w-full h-[80%] mb-[20px]'>
          <div className='flex items-center justify-center bg-[#DADADA] row-start-1 row-end-4 col-start-1 col-end-2 h-full rounded-[20px]'><h3 className='text-[25px] font-bold'><Link to="/admin/avtomobile">Avtomobiles</Link></h3></div>
          <div className='flex items-center justify-center bg-[#DADADA] row-start-1 row-end-2 col-start-2 col-end-3 h-full rounded-[20px]'><h3 className='text-[25px] font-bold'> <Link to="/admin/avtomobile/branches">Branches</Link></h3></div>
          <div className='flex items-center justify-center bg-[#DADADA] row-start-2 row-end-3 col-start-2 col-end-3 h-full rounded-[20px]'><h3 className='text-[25px] font-bold'> <Link to="/admin/avtomobile/haulers">Haulers</Link></h3></div>
          <div className='flex items-center justify-center bg-[#DADADA] row-start-3 row-end-4 col-start-2 col-end-3 h-full rounded-[20px]'><h3 className='text-[25px] font-bold'> <Link to="/admin/avtomobile/staff">Staff</Link></h3></div>
          <div className='bg-[#DADADA] row-start-1 row-end-4 col-start-3 col-end-4 h-full rounded-[20px] p-[10px] '>
           <div className='flex flex-col justify-between h-full'>
           <div>
            <h3 className='text-[25px] font-bold text-center'>Company info</h3>
            <div className='flex items-center justify-center gap-[50px] relative mb-[20px]'>
              <div>
                <button className='bg-white flex items-center gap-[5px] rounded-[30px] pe-[10px] mb-[20px]'><div className='px-[4px] rounded-[50%] bg-[#ECECEC] border-[1px] border-[#000]'>🖍</div>edit</button>
                <button className='bg-white flex items-center gap-[5px] rounded-[30px] pe-[10px]'><div className='px-[4px] rounded-[50%] bg-green-500 border-[1px] border-[#000] text-white'>✔</div>save</button>
              </div>
              <img className='relative' src={Gm} alt="" />
              <p className='absolute text-[30px] right-[100px] bottom-[-10px] px-[10px] rounded-[50%] bg-[red] text-white cursor-pointer'>🗑</p>
            </div>
            <div className='flex flex-col items-center justify-center mb-[20px]'>
              <div className='flex gap-[10px]'><p className='font-semibold'>Name</p> <div className='border-b-2 border-[#000] w-[250px] text-center'>General Motors</div></div>
              <div className='flex gap-[10px]'><p className='font-semibold'>Ceo</p> <div className='border-b-2 border-[#000] w-[250px] text-center'>Fatxullayev Behruz</div></div>
              <div className='flex gap-[10px]'><p className='font-semibold'>Founded at</p> <div className='border-b-2 border-[#000] w-[250px] text-center'>01 / 01 / 2000</div></div>
            </div>
            </div>
            <div className='w-full bg-white h-[130px] rounded-[10px] border-[1px] border-[#000]'></div>
           </div>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <div className='flex items-center gap-[10px] bg-white w-[200px] border-[1px] border-[#F00A0F] rounded-[20px]'><p className='text-white bg-[red] px-[8px] py-[2px] rounded-[10px] font-bold'>X</p> <h4>delete the company</h4></div>

        </div>
      </div>
    </section>
  )
}

export default EditProduct