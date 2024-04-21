import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import AutoSell from "../../../assets/images/AutoSell.svg";
const Header = ({ title }) => {
  return (
    <>
      <header className='h-[10vh] p-[20px] w-full border-b-[3px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='w-[400px]'>
              <img src={AutoSell} alt="" />
            </div>
            <h2>{title}</h2>
          </div>
          <div  className='flex items-center gap-[10px]'>
            <IoIosNotifications size={30}/>
            <FaUserAlt size={30}/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header