"use client";
import { navItems } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Instrument_Sans } from "next/font/google";
import Header from "./Header";
const inter = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const Hero = () => {
  const [active, setActive] = useState("home");
  return (
    <section className="w-full ">
      {/* background image */}
      <Image
        className="absolute w-full lg:h-[95%]  h-screen object-cover"
        src="/bg.jpg"
        alt="img"
        width={500}
        height={500}
      />

      {/* after header(body) */}
      <div className="relative h-[100vh] lg:h-[95vh] inset-0 bg-black/50 text-white  capitalize py-3  px-3">
        {/* header */}
        <header className="flex items-center justify-between lg:px-10">
          {/* logo */}
          <div className="flex items-center  ">
            <Image
              className="ml-[-33px]"
              src="/logo-2.png"
              alt="imgf"
              width={100}
              height={100}
            />
            <span className="font-bold ml-[-25px]">PickEatPickIt</span>
          </div>

          <Image
            className="lg:hidden "
            src="/menu.png"
            alt="img"
            width={40}
            height={40}
            // layout="fill"
            // objectFit="cover"
          />

          {/* nav items */}
          <nav className="text-md right-0 hidden lg:flex capitalize gap-8 items-center ">
            {navItems.map((item) => (
              <>
                <a
                  className={
                    active === item.label
                      ? "cursor-pointer border-b-2"
                      : "cursor-pointer font-extralight"
                  }
                  // href="/"
                  onClick={() => setActive(item.label)}
                >
                  {item.label}
                </a>
              </>
            ))}
          </nav>
        </header>

        {/* body */}
        <div className=" flex max-w-3xl mx-auto flex-col justify-center items-center">
          <h1 className="header-text lg:header-text-lg lg:mt-10">
            your one-step destination for food delivery and courier services
          </h1>
          <p className={` hero-small my-5 text-gray-300`}>
            satisfy your cravings and send packages with ease - all in one place
          </p>

          {/* search */}
          <div className="bg-white mt-5 gap-3 text-black flex items-center lg:py-3 px-5 py-5 rounded-full">
            <p className="text-[12px] lg:text-[15px] text-center  font-light  text-gray-500">
              search for food by name, resturant or location
            </p>
            <button className="btn hidden lg:flex ">Search</button>
          </div>
          <button className="btn my-8 lg:hidden ">Search</button>

          {/* form */}
          <div className="flex  mx-5 flex-col  items-center shadow-xl bg-white mb-10  lg:mt-[-8rem]  max-w-2xl lg:mx-auto rounded-xl p-5">
            <h1 className="hero-form-text font-bold">
              Send a package with ease
            </h1>
            <p className="mb-7 text-gray-400 text-sm">
              Fields for the courier service section
            </p>
            <div className="lg:grid grid-cols-2 gap-3">
              <input
                className="border-[#FFD700]"
                placeholder="Pickup location"
              />
              <input placeholder="Drop off location" />
              <input placeholder="Type of item" />
              <input placeholder="weight " />
              <textarea
                className="mt-4 w-full lg:hidden "
                placeholder="Additional details "
              ></textarea>
            </div>
            <textarea
              className="mt-4 hidden  lg:flex w-[75%] mx-auto"
              placeholder="Additional details "
            ></textarea>
            <p className="text-gray-300 my-5 font-[200] text-[9px] lg:text-[15.27px]">
              Estimated cost and dilivery time dynamically displayed based on
              the user's input
            </p>
            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
