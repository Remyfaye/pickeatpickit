import { navItems } from "@/constants";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <Image
        className="absolute w-full   h-[90vh] object-cover"
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
          <h1>PickEatPickIt</h1>
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
          <h1 className="text-3xl text-center lg:text-4xl lg:font-bold font-semibold mt-8">
            your one-step destination for food delivery and courier services
          </h1>
          <p className="my-5 text-center font-[inter] text-gray-200 font-extralight">
            satisfy your cravings and send packages with ease - all in one place
          </p>

          {/* search */}
          <div className="bg-white mt-5 gap-3 text-black flex items-center px-6 py-3 rounded-full">
            <p className="text-sm font-[inter] font-extralight text-gray-500">
              search for food by name, resturant or location
            </p>
            <button className="btn hidden lg:flex ">Search</button>
          </div>
          <button className="btn mt-5 lg:hidden ">Search</button>
        </div>
      </div>

      {/* form */}
      <div className="flex mx-5 flex-col items-center shadow-xl bg-white mb-10 relative lg:mt-[-6rem] mt-[-13rem] max-w-2xl lg:mx-auto rounded-xl p-5">
        <h1 className="font-bold text-2xl my-3">Send a package with ease</h1>
        <p className="mb-7 text-gray-400 text-sm">
          Fields for the courier service section
        </p>
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="Pickup location" />
          <input placeholder="Drop off location" />
          <input placeholder="Type of item" />
          <input placeholder="weight " />
        </div>
        <textarea
          className="mt-4 w-full"
          placeholder="Additional details "
        ></textarea>
        <p className="text-gray-300 my-5">
          Estimated cost and dilivery time dynamically displayed based on the
          user's input
        </p>
        <button className="btn">Send</button>
      </div>
    </section>
  );
};

export default Hero;
