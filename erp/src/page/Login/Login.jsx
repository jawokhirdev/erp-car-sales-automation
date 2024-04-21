import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import autoim from "../../assets/images/autoim.svg"
const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const handleLogin = (e) => {
    e.preventDefault();
    if(!userName || !password){
      alert("error")
    }else if(userName){
      setLoggedIn(true)
    }
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen relative">
     
        <div className="flex items-center">
          <div className="w-[500px] bg-[#DCDCDC] opacity-85 rounded-[20px]  overflow-hidden  border-[1px] border-[#03AB00]">
            <h2 className="pt-[20px] pb-[15px] text-center border-[1px] text-[40px] font-bold border-b-[#03AB00] mb-[37px] ">
              Log in
            </h2>
            <div className="flex items-center justify-center">
              <form
                onSubmit={handleLogin}
                className="w-[400px] flex items-center justify-center flex-col gap-[11px]"
              >
                <input
                  className="w-full h-[40px] text-white font-normal ps-[7px] bg-[#B8B8B8] placeholder:text-white outline-none border-[1px] border-[#03AB00]"
                  type="text"
                  placeholder="Username"
            
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  className="w-full h-[40px] text-white font-normal mb-[37px] ps-[7px] bg-[#B8B8B8] placeholder:text-white outline-none border-[1px] border-[#03AB00]"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
         
                  <button className="py-[10px] bg-[#03AB00] rounded-[25px] px-[50px] text-[30px] font-bold mb-[31px] text-white">
                    Login
                  </button>
         
              </form>
            </div>
            <div className="flex items-center justify-center mb-[58px] gap-[63px] ">
              <p className="text-[#FFA800]">Already have an account?</p>
              <Link className="text-[#03AB00] underline" to="/register">
                Sign up
              </Link>
            </div>
          </div>
          <img src={autoim} alt="" />
        </div>
        {loggedIn && <Navigate to="/admin" />}
      </section>
    </>
  );
};

export default Login;