import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";
import AutoSell from "../../../assets/images/AutoSell.svg";
import { FcSalesPerformance } from "react-icons/fc";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import Gm from "../../../assets/images/gm.svg"
import { MdDashboard } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

import { IoMdContacts } from "react-icons/io";
const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`pt-[20px] h-[90vh] pb-[20px] border-e-[3px] border-[#5e565661] flex justify-between flex-col ${isSidebarOpen ? "duration-300" : ""
        }`}
    >
      <div className="h-full">

        <ul className="pt-[25px]">


          <li
            className={
              isSidebarOpen
                ? "mb-[5px] flex items-center justify-center"
                : "mb-[5px]"
            }
          >
            <Link
              to="/admin/companyInfo"
              className={`flex items-center py-[15px] gap-[9px] ${isSidebarOpen ? "p-[20px]" : "ps-[25px]"
                }  duration-300 ${location.pathname === "/admin/companyInfo" ? "bg-[#000]" : ""
                }`}
            >
              <img width={30} height={30} src={Gm} alt="" />
              <h3
                className={`text-black text-[20px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
                  } ${location.pathname === "/admin/companyInfo" ? "text-white" : ""
                  }`}

              >
                General Motors
              </h3>
            </Link>
          </li>
          <li className={
            isSidebarOpen
              ? "mb-[5px] flex items-center justify-center"
              : "mb-[5px]"
          }>
            <Link
              to="/admin/avtomobile/admin"
              className={`flex items-center py-[15px] gap-[9px] ${isSidebarOpen ? "p-[20px]" : "ps-[25px]"
                }  duration-300 ${location.pathname === "/admin/avtomobile/admin" ? "bg-[#000]" : ""
                }`}
            >
              <MdOutlineAdminPanelSettings size={30} className={`${location.pathname === "/admin/avtomobile/admin" ? "text-white" : ""
                }`} />
              <h3
                className={`text-black text-[20px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
                  }${location.pathname === "/admin/avtomobile/admin" ? "text-white" : ""
                  }`}
              >
                Admin
              </h3>
            </Link>
          </li>
          <li
            className={
              isSidebarOpen
                ? "mb-[5px] flex items-center justify-center"
                : "mb-[5px]"
            }>
            <Link
              to="/admin/Warehouse"
              className={`flex items-center py-[15px] gap-[9px] ${isSidebarOpen ? "p-[20px]" : "ps-[25px]"
                }  duration-300 ${location.pathname === "/admin/Warehouse" ? "bg-[#000]" : ""
                }`}
            >
              <FaWarehouse size={30} className={`${location.pathname === "/admin/Warehouse" ? "text-white" : ""
                }`} />
              <h3
                className={`text-black text-[20px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
                  } ${location.pathname === "/admin/Warehouse" ? "text-white" : ""
                  }`}
              >
                Warehouse
              </h3>
            </Link>
          </li>
          <li
            className={
              isSidebarOpen
                ? "mb-[5px] flex items-center justify-center"
                : "mb-[5px]"
            }
          >
            <Link
              to="/admin/avtomobile/dispatch"
              className={`flex items-center py-[15px] gap-[9px] ${isSidebarOpen ? "p-[20px]" : "ps-[25px]"
                }  duration-300 ${location.pathname === "/admin/avtomobile/dispatch" ? "bg-[#000]" : ""
                }`}
            >
              <TbTruckDelivery size={30} className={`${location.pathname === "/admin/avtomobile/dispatch" ? "text-white" : ""
                }`} />
              <h3
                className={`text-black text-[20px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
                  } ${location.pathname === "/admin/avtomobile/dispatch" ? "text-white" : ""
                  }`}

              >
                Dispatch
              </h3>
            </Link>
          </li>
          <li
            className={
              isSidebarOpen
                ? "mb-[5px] flex items-center justify-center"
                : "mb-[5px]"
            }>
            <Link
              to="/admin/sales"
              className={`flex items-center py-[15px] gap-[9px] ${isSidebarOpen ? "p-[20px]" : "ps-[25px]"
                }  duration-300 ${location.pathname === "/admin/sales" ? "bg-[#000]" : ""
                }`}
            >
              <IoMdContacts size={30} className={`${location.pathname === "/admin/sales" ? "text-white" : ""
                }`}  />
              <h3
                className={`text-black text-[20px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
                  } ${location.pathname === "/admin/sales" ? "text-white" : ""
                  }`}
              >
                Sales
              </h3>
            </Link>
          </li>

          <li
            className={
              isSidebarOpen
                ? "mb-[5px] flex items-center justify-center"
                : "mb-[5px]"
            }>
            <Link
              to="/admin/dashboard"
              className={`flex items-center py-[15px] gap-[9px] ${isSidebarOpen ? "p-[20px]" : "ps-[25px]"
                }  duration-300 ${location.pathname === "/admin/dashboard" ? "bg-[#000]" : ""
                }`}
            >
              <MdDashboard size={30} className={`${location.pathname === "/admin/dashboard" ? "text-white" : ""
                }`} />
              <h3
                className={`text-black text-[20px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
                  } ${location.pathname === "/admin/dashboard" ? "text-white" : ""
                  }`}
              >
                Dashboard
              </h3>
            </Link>
          </li>



        </ul>


      </div>
      <div className="px-[20px] border-t-[3px]">
        <Link className="flex items-center  w-full duration-300 " to="/login">
          <button className="flex items-center gap-[9px] text-[#3a3a3a] py-[15px]">
            <IoSettingsOutline size={30} />
            <p
              className={`text-black text-[14px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
                }`}
            ></p>
          </button>
          <h3
            className={`text-black text-[20px] font-normal leading-[20px] ${isSidebarOpen ? "hidden" : ""
              }`}
          >

            Customer
          </h3>
        </Link>
        <p>2024. PDP University</p>
      </div>
    </div>
  );
};

export default Sidebar;
