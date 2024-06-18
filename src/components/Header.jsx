import { navItems } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="relative h-[90vh] lg:h-[95vh] inset-0 bg-black/50 text-white  capitalize  p-5">
      {/* header */}
      <header className="flex items-center justify-between lg:px-10">
        {/* logo */}

        <div className="flex items-center  ">
          <Image
            className="ml-[-33px]"
            src="/logo-2.png"
            alt="img2"
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

      {/* hero */}
      <div className="mt-[2rem] flex max-w-3xl mx-auto flex-col justify-center items-center">
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
        <button className="btn mt-8 lg:hidden ">Search</button>
      </div>
    </div>
  );
};

export default Header;
