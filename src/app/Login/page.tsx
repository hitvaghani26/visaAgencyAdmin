import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

    <div className="  bg-[#F8F9FD] bg-gradient-to-t from-white to-[#F4F7FB] rounded-[40px] p-6 border-5  shadow-[rgba(224,36,84,0.4)_0px_10px_30px_1px,rgba(13,66,110,0.4)_0px_10px_30px_1px] mx-auto my-5
">
    <div className="w-[500px] text-center font-black text-[30px] text-[#0D426E]">Log in</div>

    <form action="" className="mt-5">
      <input
        required
        className="w-full bg-white  py-3 px-5 rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff]  border-2 border-transparent focus:border-[#E02454] focus:outline-none"
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        />

      <input
        required
        className="w-full bg-white  py-3 px-5 rounded-[20px] mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] border-solid border-2 border-transparent focus:border-[#E02454] focus:outline-none"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        />

      <span className="block mt-2 ml-2 text-xs">
        <Link href="/forgotpass" className="text-[#0099ff] no-underline">
          Forgot Password?
        </Link>
      </span>

      <input
        className="block w-full font-bold bg-gradient-to-br from-[#E02454] to-[#0D426E] text-white py-3 mt-5 rounded-[20px] shadow-[rgba(133,189,215,0.88)_0px_20px_10px_-15px] border-none transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[rgba(133,189,215,0.88)_0px_23px_10px_-20px] active:scale-95 active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10px]"
        type="submit"
        value="Sign In"
        />
    </form>

  

    
  </div>
        </div>
  )
}

export default page