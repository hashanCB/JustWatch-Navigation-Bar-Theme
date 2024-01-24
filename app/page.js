"use client";
import Image from "next/image";
import Navbar from "./pages/Navbar";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [navbar, setnavbar] = useState(false);
  const [navbarright, setnavbarright] = useState(false);
  let navpop = useRef(null);

  const handleClickOutside = (event) => {
    if (navpop.current && !navpop.current.contains(event.target)) {
      setnavbar(false);
      setnavbarright(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navbaropacity = () => {
    setnavbar(true);
  };
  const navbarrightfun = () => {
    setnavbarright(true);
  };
  return (
    <div className=" xl:max-w-[1624px] xl:mx-auto overflow-x-hidden  ">
      <div className={`${navbar ? "opacity-50" : "opacity-100"}`}>
        <div className=" flex  ">
          <Navbar
            navbaropacity={navbaropacity}
            navbarrightfun={navbarrightfun}
          />
        </div>
      </div>
      {/* topup navbar */}
      <div
        ref={navpop}
        className={`${
          navbar ? "opacity-100" : " hidden"
        }  fixed top-[55px] left-5  
        w-[220px] h-[450px] bg-[#060d17] text-white/55 `}
      >
        <ul className=" space-y-5 m-4">
          <li> Connect your TV</li>
          <li> Apps</li>
          <li> About us</li>
          <li> JustWatch Media</li>
          <li>Telent</li>
          <li>API</li>
          <li>lmprint</li>
          <li>FAQ</li>
          <li>Terms of Use</li>
          <li> Privacy Policy</li>
        </ul>
      </div>

      <div
        ref={navpop}
        className={`${
          navbarright ? "opacity-100" : " hidden"
        }  fixed top-[55px] right-5  
         w-[220px] h-[450px] bg-[#060d17] text-white/55 `}
      >
        <ul className=" space-y-5 m-4">
          <li> Connect your TV</li>
          <li> Apps</li>
          <li> About us</li>
          <li> JustWatch Media</li>
          <li>Telent</li>
          <li>API</li>
          <li>lmprint</li>
          <li>FAQ</li>
          <li>Terms of Use</li>
          <li> Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
