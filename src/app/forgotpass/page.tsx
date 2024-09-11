import Link from 'next/link'
import React from 'react'

const ForgotPass = () => {
    return (
        <div className="bg-gradient-to-r from-[#e0e5ec] via-[#f0f0f3] to-[#d3d8e1] flex justify-center items-center min-h-screen p-4">
            <div className="bg-[#ebebeb] rounded-lg p-6 border-5 shadow-[5px_5px_10px_#babecc,-5px_-5px_10px_#ffffff] max-w-full w-[500px]">
                <div className="text-center font-black text-[24px] md:text-[30px] text-[#0D426E] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] bg-[#f0f0f3] rounded-lg p-4">
                    Forgot Password
                </div>

                <form action="" className="mt-5">
                    <input
                        required
                        className="w-full bg-[#ffffff] py-3 px-5 rounded-lg mt-4 shadow-[5px_5px_10px_#babecc,-5px_-5px_10px_#ffffff] hover:shadow-[8px_8px_15px_#babecc,-8px_-8px_15px_#ffffff] focus:shadow-[8px_8px_15px_#babecc,-8px_-8px_15px_#ffffff] focus:outline-none transition-shadow duration-200 text-[14px] md:text-[16px]"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                    />

                    <span className="block mt-4 ml-2 text-sm">
                        <Link href="/Login" className="text-[#0099ff] no-underline">
                            Log In
                        </Link>
                    </span>

                    <input
                        className="block w-full font-bold bg-gradient-to-br from-[#E02454] to-[#0D426E] text-white py-3 mt-5 rounded-full transition-all duration-300 ease-in-out shadow-[5px_5px_10px_#babecc,-5px_-5px_100px_#ffffff] hover:shadow-[8px_8px_15px_#babecc,-8px_-8px_15px_#ffffff] hover:scale-105 active:scale-95 focus:outline-none"
                        type="submit"
                        value="Send Email"
                    />
                </form>
            </div>
        </div>
    )
}

export default ForgotPass
