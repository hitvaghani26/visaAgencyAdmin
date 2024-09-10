import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white flex justify-center items-center h-screen'>

    <div className="  bg-[#ebebeb]  rounded-lg p-6 border-5  ">
    <div className="w-[500px] text-center font-black text-[30px] text-[#0D426E]">Log in</div>

    <form action="" className="mt-5">
      <input
        required
        className="w-full bg-[#ffffff]  py-3 px-5 rounded-lg mt-4   border-2 border-transparent focus:border-[#E02454] focus:outline-none"
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        />

      <input
        required
        className="w-full bg-white  py-3 px-5 rounded-lg mt-4  border-solid border-2 border-transparent focus:border-[#E02454] focus:outline-none"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        />

      <span className="block mt-4 ml-2 text-sm">
        <Link href="/forgotpass" className="text-[#0099ff] no-underline">
          Forgot Password?
        </Link>
      </span>

      <input
        className="block w-full font-bold bg-gradient-to-br from-[#E02454] to-[#0D426E] text-white py-3 mt-5 rounded-lg  transition-all duration-200 ease-in-out hover:scale-105  active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10px]"
        type="submit"
        value="Sign In"
        />
    </form>

  

    
  </div>
        </div>
  )
}

export default page