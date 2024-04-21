import React from 'react'
import Gm from "../../assets/images/gm.svg"
import { Link } from 'react-router-dom'
const Inventory = () => {
  return (
    <section className='h-[90vh]  '>


      <div className='p-[20px] h-full'>
        <div className='h-full grid  p-[20px] rounded-[20px] bg-[#ECECEC] gap-[30px]'>
          <div className='bg-[#DADADA] p-[10px] rounded-[20px] row-start-1 row-end-3 col-start-1 col-end-2 flex flex-col justify-between gap-[20px]'>
            <div className='h-[40%]'>
              <h3 className='text-center text-[25px] font-medium mb-[10px]'>Company info</h3>
              <div className='flex items-center gap-[30px]'>
           
                <img src={Gm} alt="" />
                
                <div className='gap-[5px]'>
                  <h3 className='text-black text-[25px] font-semibold'>General Motors</h3>
                  <h3 className='text-black text-[25px] font-semibold'>CEO: <span className='font-normal italic text-[20px]'>Fatxullayev Behruz</span></h3>
                  <h3 className='text-black text-[25px] font-semibold'>Since: <span className='font-normal italic text-[20px]'>01 / 01 / 2000</span></h3>
                </div>
              </div>
            </div>
            <div className='w-full h-[40%] bg-white rounded-[10px]'></div>
          </div>
          <div className='bg-[#DADADA] rounded-[20px] row-start-1 row-end-2 col-start-2 col-end-4 p-[10px]'>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <h2 className='text-center text-[25px] font-medium mb-[10px]'>
                  Fatxullayev Bexruz
                </h2>
                <p className='text-center'>@bexruzzz</p>
                <address className='text-center'>bexruz99@gmail.com</address>
              </div>
              <h3 className='text-black text-[25px] font-semibold'>Your current position: <span className='font-normal italic text-[20px]'>CEO</span></h3>
            </div>
          </div>
          <div className='bg-[#DADADA] rounded-[20px] row-start-3 row-end-4 col-start-1 col-end-2 p-[10px]'>
            <h3 className='text-center text-[25px] font-medium mb-[10px]'>Statistics</h3>
            <table className="table-auto bg-white w-full h-[70%]">
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
            <p className='underline text-right'>see full stats</p>
          </div>
          <div className='bg-[#DADADA] rounded-[20px] row-start-2 row-end-4 col-start-2 col-end-3 p-[10px]'>
          <h3 className='text-center text-[25px] font-medium mb-[10px]'>Branches</h3>
          </div>
          <div className='bg-[#DADADA] rounded-[20px] row-start-2 row-end-4 col-start-3 col-end-4  p-[10px]'>
          <h3 className='text-center text-[25px] font-medium mb-[10px]'>Staff</h3>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Inventory