import Link from "next/link";

export default function Home() {
  return (
    <main>
      <main>
        <div className='shadow-sm border-b-[1px]'>
          <div className='container py-4 mx-auto'>
            <h1 className='text-2xl text-center'>Home page</h1>
          </div>
        </div>

        <div className='grid h-screen place-content-center'>
          <div className='flex flex-row gap-5'>
            <Link href={"/login"} className='border-[1px] px-10 py-3 border-purple-500'>
              Login
            </Link>

            <Link href={"/dashboard"} className='border-[1px] px-10 py-3 border-purple-500'>
              Dahsborard
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
}
