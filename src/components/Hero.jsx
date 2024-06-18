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
      <Image
        className="absolute w-full lg:h-[95%]  h-[90%] object-cover"
        src="/bg.jpg"
        alt="img"
        width={500}
        height={500}
        // layout="fill"
        // objectFit="cover"
      />
      <Header />

      {/* form */}
      <div className="flex  mx-5 flex-col  items-center shadow-xl bg-white mb-10 relative lg:mt-[-8rem] mt-[-10rem] max-w-2xl lg:mx-auto rounded-xl p-5">
        <h1 className="hero-form-text font-bold">Send a package with ease</h1>
        <p className="mb-7 text-gray-400 text-sm">
          Fields for the courier service section
        </p>
        <div className="lg:grid grid-cols-2 gap-3">
          <input className="border-[#FFD700]" placeholder="Pickup location" />
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
          Estimated cost and dilivery time dynamically displayed based on the
          user's input
        </p>
        <button className="btn">Send</button>
      </div>
    </section>
  );
};

export default Hero;
