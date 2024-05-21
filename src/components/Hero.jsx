import { navItems } from "@/constants";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full ">
      <Image
        className="absolute w-full   h-[95%] object-cover"
        src="/bg.jpg"
        alt="img"
        width={500}
        height={500}
        // layout="fill"
        // objectFit="cover"
      />

      <div className="relative h-[90vh] inset-0 bg-black/50 text-white  capitalize  p-5">
        {/* header */}
        <header className=" flex items-center justify-between lg:px-10">
          {/* logo */}
          <Image
            className=" object-cover"
            src="/logo.png"
            alt="img"
            width={200}
            height={200}
            // layout="fill"
            // objectFit="cover"
          />
          <div className="flex items-center gap-2 justify-between">
            {/* <Image src="/logo.png" alt="img" width={200} height={200} /> */}
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
                <h1 className=" font-extralight" href="">
                  {item.label}
                </h1>
              </>
            ))}
          </nav>
        </header>

        {/* hero */}
        <div className="mt-[2rem] flex max-w-3xl mx-auto flex-col justify-center items-center">
          <h1 className="header-text lg:header-text-lg lg:mt-10">
            your one-step destination for food delivery and courier services
          </h1>
          <p className="hero-small my-5 text-gray-300">
            satisfy your cravings and send packages with ease - all in one place
          </p>

          {/* search */}
          <div className="bg-white mt-5 gap-3 text-black flex items-center px-6 py-3 rounded-full">
            <p className="text-sm font-[inter] font-extralight text-gray-500">
              search for food by name, resturant or location
            </p>
            <button className="btn hidden lg:flex ">Search</button>
          </div>
          <button className="btn mt-8 lg:hidden ">Search</button>
        </div>
      </div>

      {/* form */}
      <div className="flex  mx-5 flex-col items-center shadow-xl bg-white mb-10 relative lg:mt-[-6rem] mt-[-15rem] max-w-2xl lg:mx-auto rounded-xl p-5">
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
