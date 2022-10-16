import React from 'react';
import mainbg from '../../src/Assests/Mainpg.png';
import mainlogo from '../../src/Assests/mainpglogo.png';
import line from '../../src/Assests/discoverpg_line.png';
import {BiSearchAlt2} from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';

const MainPage = () => {
  return (
    <div className="w-full h-screen">
        <div className="grid grid-cols-3 absolute">

            <div className="bg-[#F97316] h-screen">
                <div className="m-10 sm:w-[150px] md:w-[200px] w-[100px]">
                    <img src={mainlogo} alt="/" />
                </div>
                <div>
                    <img className="mt-32 ml-16" src={mainbg} alt="/" />
                </div>
            </div>

            <div className="justify-self-end md:mr-16 col-span-2 md:w-1/2 absolute">
                <div className="flex mt-10 relative items-center justify-evenly">
                    <button className=" border border-[#F97316] rounded-full w-[100px] sm:w-[120px] md:w-[150px]  py-3 md:text-xl text-[#000000] sm:text-lg text-md"> Register now </button>
                    <button className="text-[#F97316] sm:text-[17px] md:text-[22px] text-[15px] mx-2 font-semibold"> Login </button>
                    <img src={line} alt="/" className=" h-[45px] sm:mx-3 " />
                    <button className=" md:-ml-8 sm:px-4  text-[#3F3D56] font-semibold text-xl"> For employers </button>
                </div>

                <div className="relative mt-32 ml-20 text-start">
                    <h1 className="lg:text-[43px] md:text-[30px] text-2xl px-2">Looking for internships?</h1>
                    <p className="lg:text-[25px] md:text-[20px] text-lg mt-4  px-2">We are here to help you find the best <br /> internship.</p>
                </div>
                
                <div className="relative ml-20 flex  flex-wrap items-stretch mb-3 mt-12">
                    <input type="text" placeholder="search jobs by title or skills" className="p-3 px-5 placeholder-[#8F8C8C] text-slate-600 relative bg-[#E0E0E0] rounded-2xl text-sm md:w-[60%] sm:w-[75%] w-[78%]" />
                    <span className="text-[22px] pr-3 py-3 -ml-8 text-[#8F8C8C] relative">
                        <BiSearchAlt2 />
                    </span>
                </div>
                <div className="relative ml-20 flex  flex-wrap items-stretch mb-3 mt-6">
                    <input type="text" placeholder="city, state or pin code" className="p-3 px-5 placeholder-[#8F8C8C] text-slate-600 relative bg-[#E0E0E0] rounded-2xl text-sm md:w-[60%] sm:w-[75%] w-[78%]" />
                    <span className="text-[24px] pr-3 py-3 -ml-8 text-[#8F8C8C] relative">
                        <HiLocationMarker />
                    </span>
                </div>
                <div>
                    <button className="text-white bg-[#F97316] w-1/6 p-3 md:p-2 rounded-full md:ml-20 ml-44 mt-6">Search</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default MainPage
