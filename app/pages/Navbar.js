import Image from "next/image";
import React from "react";

const Navbar = ({ navbaropacity, navbarrightfun }) => {
  const clickbuger = () => {
    navbaropacity();
  };

  const clickbugerright = () => {
    navbarrightfun();
  };
  return (
    <div className="  w-full flex flex-col bg-gray-800">
      <div className=" w-full flex justify-between px-5 mb-2 mt-5  md:hidden lg:hidden ">
        <div className="flex" onClick={clickbuger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-8  text-[#fff]/50 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className=" flex   max-w-[146px] items-center  ">
          <Image src="/Logo.webp" alt width={150} height={40} />
        </div>

        <div className="flex gap-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-[#fff]/40 "
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-[#fff]/70 "
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex w-full px-3 items-center  h-[56px] md:mx-10 md:mt-5 md:pr-10">
        <div className=" flex  mr-5  md:w-2/12  min-w-[146px] items-center xs:hidden md:block ">
          <Image src="/Logo.webp" alt width={150} height={40} />
        </div>

        <div className="  md:w-4/12  xs:4/12  max-w-[350px] flex gap-5  text-[#999c9f] text-[14px] ">
          <a href="" className="hover:text-[#d9e8ed]">
            {" "}
            Home
          </a>
          <a href="" className="hover:text-[#d9e8ed] xs:hidden md:block">
            {" "}
            New
          </a>
          <a href="" className="hover:text-[#d9e8ed]">
            {" "}
            Popular
          </a>
          <a href="" className="hover:text-[#d9e8ed] xs:hidden md:block">
            {" "}
            Lists
          </a>
          <a href="" className="hover:text-[#d9e8ed]">
            {" "}
            Sports
          </a>
          <a href="" className="hover:text-[#d9e8ed]">
            {" "}
            Guide
          </a>
        </div>

        <div className="flex xs:w-full  md:w-full ">
          <div className=" flex items-center w-full  bg-[#333]/50 p-2 rounded-lg m-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#999c9f]/50 p-[2px] font-bold "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search for movies or TV shows"
              className=" bg-transparent  placeholder:text-[#999c9f]/70 pl-3 "
            />
          </div>
        </div>

        <div className=" md:w-2/12 items-center gap-1 lg:gap-3 xs:hidden  md:flex m-2 ">
          <button className=" bg-[#1c252f] py-2 px-2 rounded-md text-[#fff] text-[14px] whitespace-nowrap lg:px-4 ">
            {" "}
            Sign In
          </button>
          <div className="flex" onClick={clickbugerright}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  text-[#fff]/50 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
