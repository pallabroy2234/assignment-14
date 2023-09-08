"use client";
import {loginApi} from "@/service/loginApi";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";

const From = () => {
  const router = useRouter();
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformValue((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginApi(formValue);
    if (res["status"] === true) {
      router.replace("/dashboard");
      router.refresh();
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action='' className='w-[400px] flex flex-col gap-7 m-20'>
        <input type='text' name='email' onChange={handleChange} className='border-[1px] border-black w-full py-2 pl-4' placeholder='Email' />

        <input type='password' name='password' onChange={handleChange} className='border-[1px] border-black w-full py-2 pl-4' placeholder='Password' />

        <button type='submit' className='border-[1px] border-purple-500 py-2'>
          Submit
        </button>

        <div className=''>
          <Link href={"/"} className='border-[1px] border-purple-500 py-2 px-10  block text-center'>
            Go to Home{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default From;
