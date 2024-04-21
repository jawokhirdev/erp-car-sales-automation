import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import "./layout.scss"
const Layout = () => {
  const { pathname } = useLocation();

  const checkPathname = () => {
    switch (pathname) {
      case "/admin/inventory":
        return "Inventory";
      case "/admin/sales":
        return "Sales";
      case "/admin/Warehouse":
        return "Warehouse";
      case "/admin/admin":
        return "Admin";
      case "/admin/avtomobile":
        return "Avtomobile";
      case "/admin/avtomobile/create":
        return "Create";
      case "/admin/avtomobile/admin":
        return "Admin panel"
      case "/admin/avtomobile/dispatch":
        return "Dispatch"
      case "/admin/avtomobile/branches":
        return "Branches"
      case "/admin/avtomobile/haulers":
        return "Haulers"
        case "/admin/dashboard":
        return "Dashboard"
    }
  };
  return (
    <div className="layout w-full">

      <div className="layout-item-1">
        <Header title={checkPathname()} />
      </div>

      <div className="layout-item-2 flex w-full">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[75%]">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Layout;