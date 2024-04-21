import React from 'react'
import "./Warehouse.scss"
const Warehouse = () => {
  return (
    <section className='Warehause h-[90vh] p-[20px] '>
    <div className='w-full h-full bg-[#ECECEC] p-[20px] rounded-[20px]'>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th colSpan={8} className='h-[70px] bg-blue-400 '>
            <div className='flex items-center justify-between'>
          <select className='outline-none rounded-[10px] py-[5px]'>
                <option selected disabled hidden>Select the warehouse</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <h2 className='text-[30px]'>MAIN WAREHOUSE</h2>
              <input className='outline-none ps-[10px] rounded-[10px]' type="text" placeholder='search' />
          </div>
            </th>
          </tr>
          <tr>
            <th colSpan={6} className='w-full'>
            </th>
            <th className='bg-yellow-300'>Total value</th>
            <th className='bg-yellow-300'>$1,900,000</th>
          </tr>
          <tr>
            <th>
              <select className='bg-transparent outline-none'>
                <option selected disabled hidden value="">ID</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </th>

            <th>  <select className='bg-transparent outline-none'>
              <option selected disabled hidden value="">Make</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select></th>

            <th>  <select className='bg-transparent outline-none'>
              <option selected disabled hidden value="">Name</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select></th>

            <th>  <select className='bg-transparent outline-none'>
              <option selected disabled hidden value="">Charakteries</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select></th>

            <th><select className='bg-transparent outline-none'>
              <option selected disabled hidden value="">Quantity</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select></th>

            <th><select className='bg-transparent outline-none'>
              <option selected disabled hidden value="">Price</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select></th>
            
            <th><select className='bg-transparent outline-none'>
              <option selected disabled hidden value="">Total cost</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select></th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>


            <tr>
              <td>refw</td>
              <td>vfwfcw</td>
              <td>ewcfwe</td>
              <td>ewcfwe</td>
              <td>wrfrefw</td>
              <td>refer</td>
              <td>refer</td>
              <td>refer</td>
            </tr>
            <tr>
              <td>refw</td>
              <td>vfwfcw</td>
              <td>ewcfwe</td>
              <td>ewcfwe</td>
              <td>wrfrefw</td>
              <td>refer</td>
              <td>refer</td>
              <td>refer</td>
            </tr>


        </tbody>
      </table>
    </div>
  </section>
  )
}

export default Warehouse