import React from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell} from 'recharts';
import { IoSync } from "react-icons/io5";

const Dashboard = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  return (
    <div className='w-full h-[90vh] p-[20px]'>
      <div className='w-full h-full'>
        <div className='grid grid-cols-4 gap-[30px] h-[30%] mb-[20px]'>
          <div className='shadow-lg p-[20px] rounded-[10px]'>
            <div className='flex items-center w-full justify-between mb-[10px]'>
              <h3 className='text-[16px] text-[#a5a1a1] font-semibold'>Budget</h3>
              <div className='bg-red-700 p-[10px] rounded-[50%]'>
                <AiFillDollarCircle size={20} color='white' />
              </div>
            </div>
            <h4 className='text-[32px] font-semibold mb-[10px]'>$24k</h4>
            <div className='flex items-center gap-[10px]'>
              <FaArrowUp color='green' />
              <p className='text-[#3bd43b] text-[15px] font-medium me-[10px]'>12%</p>
              <p className='text-[15px]'>Since last month</p>
            </div>
          </div>

          <div className='shadow-lg p-[20px] rounded-[10px]'>
            <div className='flex items-center w-full justify-between mb-[10px]'>
              <h3 className='text-[16px] text-[#a5a1a1] font-semibold'>Totla Customer</h3>
              <div className='bg-green-500 p-[10px] rounded-[50%]'>
                <HiMiniUsers size={20} color='white' />
              </div>
            </div>
            <h4 className='text-[32px] font-semibold mb-[10px]'>1.6k</h4>
            <div className='flex items-center gap-[10px]'>
              <FaArrowUp color='green' />
              <p className='text-[#3bd43b] text-[15px] font-medium me-[10px]'>12%</p>
              <p className='text-[15px]'>Since last month</p>
            </div>
          </div>


          <div className='shadow-lg p-[20px] rounded-[10px]'>
            <div className='flex items-center w-full justify-between mb-[10px]'>
              <h3 className='text-[16px] text-[#a5a1a1] font-semibold'>Task Process</h3>
              <div className='bg-orange-400 p-[10px] rounded-[50%]'>
                <TfiMenuAlt size={20} color='white' />
              </div>
            </div>
            <h4 className='text-[32px] font-semibold mb-[10px]'>75.5%</h4>
            <div className='flex items-center gap-[10px]'>
              <FaArrowUp color='green' />
              <p className='text-[#3bd43b] text-[15px] font-medium me-[10px]'>12%</p>
              <p className='text-[15px]'>Since last month</p>
            </div>
          </div>


          <div className='shadow-lg p-[20px] rounded-[10px]'>
            <div className='flex items-center w-full justify-between mb-[10px]'>
              <h3 className='text-[16px] text-[#a5a1a1] font-semibold'>Total Profit</h3>
              <div className='bg-blue-500 p-[10px] rounded-[50%]'>
                <AiFillDollarCircle size={20} color='white' />
              </div>
            </div>
            <h4 className='text-[32px] font-semibold mb-[10px]'>$15k</h4>
            <div className='flex items-center gap-[10px]'>
              <FaArrowUp color='green' />
              <p className='text-[#3bd43b] text-[15px] font-medium me-[10px]'>12%</p>
              <p className='text-[15px]'>Since last month</p>
            </div>
          </div>
        </div>

        <div className='flex gap-[10px] w-full h-[67%]'>
          <div className='w-[68%] h-full shadow-lg  rounded-[10px] p-[20px]'>
            <div className='flex justify-between w-full mb-[30px] h-[20%]'>
              <p className='text-[20px] font-semibold'>Sales</p>
              <div className='flex items-center gap-[10px]'>
                <IoSync />
                <p>Sync</p>
              </div>
            </div>
            <div className='h-[75%]'>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={200}
                  height={100}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                  <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='w-[30%] shadow-lg h-full rounded-[10px] p-[20px]'>
            <p className='text-[20px] font-medium'>Traffic Source</p>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard