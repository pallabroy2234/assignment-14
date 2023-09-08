"use client";

import {useRouter} from "next/navigation";

const Dashboard = async () => {
  const router = useRouter();

  const handleclick = async () => {
    const res = await fetch("/api/login");
    const json = await res.json();
    if (json["status"] === true) {
      router.replace("/dashboard");
      router.refresh();
    }
  };
  return (
    <>
      <div className='border-b-[1px] shadow-sm py-3'>
        <h1 className='text-2xl text-center'>Dashboard</h1>
      </div>
      <div className='grid h-screen gap-5 place-content-center'>
        <button onClick={handleclick} className='border-[1px] border-purple-400 px-10 py-3 text-xl'>
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
