import Link from 'next/link'
import React from 'react'

const ForgotPass = () => {
    return (

        <div className='bg-white flex justify-center items-center h-screen'>

            <div className=" bg-[#ebebeb] rounded-lg p-6 border-5 mx-auto my-5
">
                <div className="w-[500px] text-center font-black text-[30px] text-[#0D426E]">Forgot Password</div>

                <form action="" className="mt-5">
                    <input
                        required
                        className="w-full bg-white  py-3 px-5 rounded-lg mt-4   border-2 border-transparent focus:border-[#E02454] focus:outline-none"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                    />

              

                    <span className="block mt-2 ml-2 text-xs">
                        <Link href="/Login" className="text-[#0099ff] no-underline">
                          Login
                        </Link>
                    </span>

                    <input
                        className="block w-full font-bold bg-gradient-to-br from-[#E02454] to-[#0d426e81] text-white py-3 mt-5 rounded-lg  border-none transition-all duration-200 ease-in-out hover:scale-105 "
                        type="submit"
                        value="Send Email"
                    />
                </form>




            </div>
        </div>

    )
}

export default ForgotPass