import React from 'react'
import Gm from "../../assets/images/gm.svg"
import Car from "../../assets/images/car.jpeg"
const Sales = () => {
  return (
    <section className='h-[90vh] p-[20px] w-full '>
      <div className='w-full h-full flex justify-between '>
        <div className='w-[30%] h-full'>
          <div className='h-[30%]'>
            <h2 className='font-semibold text-[18px] mb-[15px]'>REFINE YOUR SEARCH </h2>
            <p className='text-[16px] font-semibold mb-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum perspiciatis voluptatem delectus placeat distinctio rerum rem reiciendis. </p>
            <div className='w-full h-[40px] rounded-[5px] overflow-hidden flex border-[1px] border-[#434141] mb-[20px]'>
              <div className='w-[50%] h-full flex'>
                <input className='h-full w-[70%] outline-none ps-[5px]' placeholder='Postcode' type="text" />
                <div className='w-[30%] bg-[blue] flex items-center justify-center'>🔍</div>
              </div>
              <div className='w-[50%] h-full bg-[yellow]'>
                <select className='w-full h-full text-[#706a6a] outline-none'>
                  <option selected disabled hidden value="">Nationwide</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
          </div>
          <ul className='w-full h-[70%] overflow-auto'>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Make</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Body type</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Doors</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Seats</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Fuel</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Colour</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Gearbox</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Year</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>MoleAge</h3><p>➡</p></li>
            <li className='flex justify-between items-center border-b-[1px] border-[#000] py-[7px]'><h3 className='text-[17px] font-semibold'>Price</h3><p>➡</p></li>
          </ul>
        </div>
        <div className='w-[68%] h-full overflow-auto pe-[30px]'>
          <div className='flex items-center w-full justify-between mb-[30px] '>
            <h2 className='font-semibold text-[20px]'>16 561 Results</h2>
            <div className='flex items-center gap-[10px]'>
              <p>Sort by</p>
              <select className='border-[1px] py-[2px] px-[5px] rounded-[5px] border-[#000]'>
                <option value="">Recomended</option>
              </select>
            </div>
          </div>
          <div className='flex gap-[10px] w-full border-b-[1px] border-[#000] pb-[10px] mb-[10px]'>
          <img src={Car} alt="" />
            <div className='w-full'>
              <h3 className='text-[18px] font-medium mb-[10px]'>Skoda Fabia 1.0 MPI SE 5dr </h3>
              <div className='w-full flex justify-between mb-[10px]'>
                <div className='flex flex-col gap-[4px]'>
                  <div className='text-[14px]'><span>🌀</span>Manual</div>
                  <div className='text-[14px]'><span>📆</span>2022</div>
                  <div className='text-[14px]'><span>⏱</span>24 975 miles</div>
                </div>
                <div className='flex flex-col gap-[4px]'>
                  <div className='text-[14px]'><span>🌀</span>Manual</div>
                  <div className='text-[14px]'><span>📆</span>2022</div>
                </div>
                <div className='flex flex-col items-end'>
                  <h4 className='text-[18px] font-semibold text-green-400'>$9,375</h4>
                  <h4 className='text-[18px] font-semibold text-green-400'>$139,73 <small>/mo PCP</small></h4>
                </div>
              </div>
              <p className='text-[10px] mb-[5px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sint similique alias dolore? Omnis distinctio consequuntur inventore accusamus necessitatibus, esse quasi alias labore doloremque beatae repellendus laboriosam nulla possimus? Tempora.</p>
            <div className='flex items-center justify-end'>
            <button className='bg-blue-500 text-white py-[5px] px-[10px] rounded-[5px]'>View deal</button>
            </div>
            </div>
          </div>
          <div className='flex gap-[10px] w-full border-b-[1px] border-[#000] pb-[10px] mb-[10px]'>
          <img src={Car} alt="" />
            <div className='w-full'>
              <h3 className='text-[18px] font-medium mb-[10px]'>Skoda Fabia 1.0 MPI SE 5dr </h3>
              <div className='w-full flex justify-between mb-[10px]'>
                <div className='flex flex-col gap-[4px]'>
                  <div className='text-[14px]'><span>🌀</span>Manual</div>
                  <div className='text-[14px]'><span>📆</span>2022</div>
                  <div className='text-[14px]'><span>⏱</span>24 975 miles</div>
                </div>
                <div className='flex flex-col gap-[4px]'>
                  <div className='text-[14px]'><span>🌀</span>Manual</div>
                  <div className='text-[14px]'><span>📆</span>2022</div>
                </div>
                <div className='flex flex-col items-end'>
                  <h4 className='text-[18px] font-semibold text-green-400'>$9,375</h4>
                  <h4 className='text-[18px] font-semibold text-green-400'>$139,73 <small>/mo PCP</small></h4>
                </div>
              </div>
              <p className='text-[10px] mb-[5px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sint similique alias dolore? Omnis distinctio consequuntur inventore accusamus necessitatibus, esse quasi alias labore doloremque beatae repellendus laboriosam nulla possimus? Tempora.</p>
            <div className='flex items-center justify-end'>
            <button className='bg-blue-500 text-white py-[5px] px-[10px] rounded-[5px]'>View deal</button>
            </div>
            </div>
          </div>
          <div className='flex gap-[10px] w-full border-b-[1px] border-[#000] pb-[10px] mb-[10px]'>
           <img src={Car} alt="" />
            <div className='w-full'>
              <h3 className='text-[18px] font-medium mb-[10px]'>Skoda Fabia 1.0 MPI SE 5dr </h3>
              <div className='w-full flex justify-between mb-[10px]'>
                <div className='flex flex-col gap-[4px]'>
                  <div className='text-[14px]'><span>🌀</span>Manual</div>
                  <div className='text-[14px]'><span>📆</span>2022</div>
                  <div className='text-[14px]'><span>⏱</span>24 975 miles</div>
                </div>
                <div className='flex flex-col gap-[4px]'>
                  <div className='text-[14px]'><span>🌀</span>Manual</div>
                  <div className='text-[14px]'><span>📆</span>2022</div>
                </div>
                <div className='flex flex-col items-end'>
                  <h4 className='text-[18px] font-semibold text-green-400'>$9,375</h4>
                  <h4 className='text-[18px] font-semibold text-green-400'>$139,73 <small>/mo PCP</small></h4>
                </div>
              </div>
              <p className='text-[10px] mb-[5px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sint similique alias dolore? Omnis distinctio consequuntur inventore accusamus necessitatibus, esse quasi alias labore doloremque beatae repellendus laboriosam nulla possimus? Tempora.</p>
            <div className='flex items-center justify-end'>
            <button className='bg-blue-500 text-white py-[5px] px-[10px] rounded-[5px]'>View deal</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sales