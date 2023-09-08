import From from "@/components/Input";
import Link from "next/link";
import React from "react";

const Login = async () => {
  return (
    <div>
      <div className='text-center border-b-[1px] py-2 shadow-sm'>
        <h1 className='text-2xl'>Login Page</h1>
      </div>
      <div className='grid h-screen place-content-center'>
        <From />
      </div>
    </div>
  );
};

export default Login;
