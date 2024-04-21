import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  const [image, setImage] = useState(null)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
  return (
    <section className='h-[90vh] flex items-center justify-center'>
      <div className='w-[747px] h-[492px] bg-[#ECECEC] rounded-[20px] p-[20px] relative'>
        <h2 className='text-[30px] font-semibold text-center mb-[10px]'>Create an automobile</h2>
        <h2 className='text-center font-bold text-[32px]'>
          <div className='grid gap-[30px] w-full h-full'>
            <div className='w-[215px] h-[213px] row-start-1 row-end-2 col-start-1 col-end-2 flex items-center justify-center border-[1px] border-[#AAAAAA] p-1'>
              <div className='w-full h-full border-[1px] border-[#AAAAAA] flex items-center justify-center relative'><p>    <img className='w-[215px] h-[213px]' alt="Photo" src={image}/></p>
              <input onChange={onImageChange} className='hidden' type="file" id='file' />
                <label htmlFor='file' className='w-[50px] h-[50px] rounded-[50%] absolute bottom-[-20px] border-[1px] border-[#03AB00] bg-[#ECECEC] text-[#03AB00] right-[-20px]'>+</label>
              </div>
            </div>
            <div className='w-[215px] h-[213px] row-start-1 row-end-2 col-start-2 col-end-3 flex flex-col justify-between'>
              <div className='flex items-start flex-col'>
                <label className='text-[15px]' htmlFor="Make">Make</label>
                <input className='h-[20px] w-[213px] text-[16px]' type="text" id='Make' />
              </div>
              <div className='flex items-start flex-col'>
                <label className='text-[15px]' htmlFor="Make">Brand</label>
                <input className='h-[20px] w-[213px] text-[16px]' type="text" id='Make' />
              </div>
              <div className='flex items-start flex-col'>
                <label className='text-[15px]' htmlFor="Make">Date</label>
                <input className='h-[20px] w-[213px] text-[15px]' type="date" id='Make' />
              </div>
              <div className='flex items-start flex-col'>
                <label className='text-[15px]' htmlFor="Make">Price</label>
                <input className='h-[20px] w-[213px] text-[16px]' type="text" id='Make' />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                  <label className='text-[15px]' htmlFor="Color">Color</label>
                  <input className='rounded-[10px]' type="color" />
                </div>
                <div className='flex items-center gap-[10px]'>
                  <label className='text-[15px]' htmlFor="Color">Seats</label>
                  <input className='rounded-[10px] h-[20px] w-[50px] text-[16px]' type="text" />
                </div>
              </div>
            </div>
            <div className=' w-[215px] row-start-1 row-end-3 col-start-3 col-end-4 flex flex-col justify-between'>

              <div className='flex items-start flex-col'>
                <label className='text-[15px]' htmlFor="Make">Gearbox</label>
                <select className='w-full text-[15px]' name="" id="">
                  <option value="">Gearbox</option>
                  <option value="">reve</option>
                  <option value="">reve</option>
                </select>
              </div>
              <div className='flex items-start flex-col'>
                <label className='text-[15px]' htmlFor="Make">Fuel</label>
                <select className='w-full text-[15px]' name="" id="">
                  <option value="">Fuel</option>
                  <option value="">reve</option>
                  <option value="">reve</option>
                </select>
              </div>
              <div className='flex items-start flex-col'>
                <label className='text-[15px]' htmlFor="Make">Body</label>
                <select className='w-full text-[15px]' name="" id="">
                  <option value="">Body</option>
                  <option value="">reve</option>
                  <option value="">reve</option>
                </select>
              </div>


              <div className='flex items-center gap-[10px]'>
                <label className='text-[15px]' htmlFor="Color">Engine size</label>
                <input className='text-[15px] w-[70px] rounded-[10px]' type="text" />
                <p className='text-[15px]'>L</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <label className='text-[15px]' htmlFor="Color">0 to 100 kmh</label>
                <input className='text-[15px] w-[70px] rounded-[10px]' type="text" />
                <p className='text-[15px]'>sec</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <label className='text-[15px]' htmlFor="Color">Top speed</label>
                <input className='text-[15px] w-[70px] rounded-[10px]' type="text" />
                <p className='text-[15px]'>kmh</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <label className='text-[15px]' htmlFor="Color">Engine power</label>
                <input className='text-[15px] w-[70px] rounded-[10px]' type="text" />
                <p className='text-[15px]'>HP</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <label className='text-[15px]' htmlFor="Color">Engine torque</label>
                <input className='text-[15px] w-[70px] rounded-[10px]' type="text" />
                <p className='text-[15px]'>Hm</p>
              </div>
              <button className='text-[23px] bg-[#03AB00] rounded-[20px] py-[5px] text-white'>Save</button>


            </div>
            <div className='h-[150px] bg-white row-start-2 row-end-3 col-start-1 col-end-3'></div>
          </div>
        </h2>
        <Link to="/admin/avtomobile">
          <button className='w-[50px] h-[50px] border-[1px] border-[red] rounded-[50%] text-[20px] font-semibold text-[red] absolute top-[-20px] right-[-20px] bg-white'>X</button>

        </Link>
      </div>

      <div>
 
  </div>
    </section>
  )
}

export default Create