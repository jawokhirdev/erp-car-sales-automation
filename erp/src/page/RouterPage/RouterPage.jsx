import React from "react";
import Login from "../Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../Register/Register";
import Layout from "../../components/layout/layout";
import Inventory from "../Inventory/Inventory";
import Sales from "../Sales/Sales";
import Admin from "../Admin/Admin";
import AddAvtomobile from "../AddAvtomobile/AddAvtomobile";
import Create from "../Create/Create";
import EditProduct from "../EditProduct/EditProduct";
import Dispatch from "../Dispatch/Dispatch";
import Branches from "../Branches/Branches";
import Haulers from "../Haulers/Haulers";
import Staff from "../Staff/Staff";
import Warehouse from "../Warehouse/Warehouse";
import CreateACompany from "../CreateACompany/CreateACompany";
import Dashboard from "../Dashboard/Dashboard";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/createCompany" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/createCompany" element={<CreateACompany/>} />
        <Route path="/admin" element={<Layout />}>
        <Route path="/admin" element={<Navigate to="/admin/companyInfo" />} />
          <Route path="/admin/companyInfo" element={<Inventory />} />
          <Route path="/admin/sales" element={<Sales />} />
          <Route path="/admin/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/warehouse" element={<Warehouse />} />
          <Route path="/admin/avtomobile" element={<AddAvtomobile/>} />
          <Route path="/admin/avtomobile/create" element={<Create/>} />
          <Route path="/admin/avtomobile/admin" element={<EditProduct/>} />
          <Route path="/admin/avtomobile/dispatch" element={<Dispatch/>} />
          <Route path="/admin/avtomobile/branches" element={<Branches/>} />
          <Route path="/admin/avtomobile/haulers" element={<Haulers/>} />
          <Route path="/admin/avtomobile/staff" element={<Staff/>} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterPage;
